// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
// const widgetsRoutes = require("./routes/widgets");
const itemRoutes = require("./routes/items");
const favouriteRoutes = require("./routes/favourites");
const productOnSaleRoutes = require("./routes/product");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/users", usersRoutes(db));
// app.use("/widgets", widgetsRoutes(db));
app.use("/items", itemRoutes(db));
app.use("/favourites", favouriteRoutes(db));
app.use("/product", productOnSaleRoutes(db));

// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  const user = `SELECT * FROM users WHERE id = $1;`;
    const products = `SELECT * FROM products LIMIT 4;`;
    const userPromise = db.query(user, [req.params["user_id"]]);
    const productPromise = db.query(products);

    const promises = [userPromise, productPromise];
    Promise.all(promises)
      .then( results =>{
        const user = results[0].rows[0];
        const products = results[1].rows;
        const templateVars = { user, products };
        res.render('index', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    return app;
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
