const { Template } = require('ejs');
const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query('SELECT * FROM products')
      .then( results => {
        res.render('post_product')
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });



  // when a seller makes a new product listing
  router.post('/:user_id/posting', (req, res) => {
    db.query(`INSERT INTO products VALUES ($1, $2, $3, $4, $5, $6, $7)`, [req.body.name, req.body.image, req.body.type, req.body.description, req.body.quantity, req.body.price, req.params["user_id"]])
    .then(results => {

      res.redirect(`/users/${req.params["user_id"]}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  return router;
};
