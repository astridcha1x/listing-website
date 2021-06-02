const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // print all items
  router.get('/',(req, res) => {
    // const user = `SELECT * FROM users WHERE id = $1;`;
    // const product = `SELECT * FROM products WHERE user_id = $1;`;
    // const favourites = `SELECT * FROM favourites JOIN products ON products.id = favourites.product_id WHERE favourites.user_id = $1;`
    // const userPromise = db.query(user, [req.params["user_id"]]);
    // const productPromise = db.query(product, [req.params["user_id"]]);
    // const favouritesPromise = db.query(favourites, [req.params["user_id"]]);
    // const promises = [userPromise, productPromise, favouritesPromise];

    // Promise.all(promises)
    db.query(`SELECT * FROM products`)
      .then( results =>{
        const products = results.rows;
        templateVars = { products }
      res.render('items', templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  return router;
};
