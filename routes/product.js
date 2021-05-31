const express = require('express');
const router  = express.Router();


module.exports = (db) => {


    // print one specific item from one user
    router.get('/:seller_id/:product_id',(req, res) => {
      db.query(`SELECT * FROM product_on_sales WHERE id = $1;`, [req.params["seller_id"]])
      .then(data => {
        res.json(data.rows[0]);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });

    // delete product from user's listing
    router.post('/:seller_id/:product_id/delete',(req, res) => {
      db.query(`DELETE FROM products WHERE user_id = $1 AND product_id =$2;`, [req.params["user_id"],req.params["product_id"]])
      .then(data => {
        res.json(data.rows[0]);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    });


    return router;


  // product main page for one specific seller
  router.get('/:user_id',(req, res) => {
    db.query(`SELECT * FROM product_on_sales WHERE seller_id = $1;`,[req.params["user_id"]])
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });


};
