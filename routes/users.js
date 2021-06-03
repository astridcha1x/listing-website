/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  router.get("/:user_id", (req, res) => { // user's page: displays user name, favourites, user's products
    const user = `SELECT * FROM users WHERE id = $1;`;
    const product = `SELECT * FROM products WHERE user_id = $1;`;
    const favourites = `SELECT * FROM favourites JOIN products ON products.id = favourites.product_id WHERE favourites.user_id = $1;`
    const userPromise = db.query(user, [req.params["user_id"]]);
    const productPromise = db.query(product, [req.params["user_id"]]);
    const favouritesPromise = db.query(favourites, [req.params["user_id"]]);
    const promises = [userPromise, productPromise, favouritesPromise];
    Promise.all(promises)
      .then( results =>{

        const user = results[0].rows[0];
        const products = results[1].rows;
        const favourites = results[2].rows;
        const templateVars = { user, products, favourites };

        res.cookie("user1", user);
        console.log("1. ", results[0].rows[0]);
        res.cookie("user2", user);

        res.render('user', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // router.get('/:user_id',(req, res) => {
  //   //user's data
  //   db.query(`SELECT * FROM users WHERE id = $1;`, [req.params["user_id"]])
  //   .then(data => {
  //     res.json(data.rows[0]);
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
  // });

  return router;

};
