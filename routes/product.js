const express = require('express');
const router  = express.Router();


module.exports = (db) => {
    // print one specific item from one user
    // message box when user clicks contact seller button
    router.get('/:seller_id/:product_id',(req, res) => {
      const user = `SELECT * FROM users WHERE id = $1;`;
      const product = `SELECT * FROM products WHERE user_id = $1 AND id = $2;`;
      const userPromise = db.query(user, [req.params["seller_id"]]);
      const productPromise = db.query(product, [req.params["seller_id"], req.params["product_id"]]);
      const promises = [userPromise, productPromise];
      Promise.all(promises)

      // db.query(`SELECT * FROM product_on_sales WHERE id = $1;`, [req.params["seller_id"]])
      .then(results => {
        const user = results[0].rows[0];
        const products = results[1].rows[0];
        const templateVars = { user, products };
        res.render('product', templateVars);
        // res.json(data.rows[0]);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });

    // delete product from user's listing
    router.post('/:seller_id/:product_id/delete',(req, res) => {
      db.query(`DELETE FROM products WHERE user_id = $1 AND id = $2;`, [req.params["seller_id"],req.params["product_id"]])
      .then( results => {
        res.redirect(`/users/${req.params["seller_id"]}`)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });

    // Quantity goes 0 and sold out message displays on product page
    router.post('/sold/:seller_id/:product_id/',(req, res) => {
      db.query(`UPDATE products SET quantity = 0 WHERE id = $1`,[req.params["product_id"]])
      .then( results => {
        res.redirect(`/users/${req.params["seller_id"]}`)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });


    return router;


  // product main page for one specific seller
  // router.get('/:user_id',(req, res) => {
  //   db.query(`SELECT * FROM product_on_sales WHERE seller_id = $1;`,[req.params["user_id"]])
  //   .then(data => {
  //     res.json(data.rows);
  //   })
  //   .catch(err => {
  //     res
  //       .status(500)
  //       .json({ error: err.message });
  //   });
  // });


};
