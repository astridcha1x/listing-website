const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // print all items
  router.get('/',(req, res) => {
    db.query(`SELECT * FROM products;`)
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  // print one specific item
  router.get('/:item_id',(req, res) => {
    db.query(`SELECT * FROM products WHERE id = $1;`, [req.params["item_id"]])
    .then(data => {
      res.json(data.rows[0]);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  // when a seller makes a new product listing
  router.post('/:user_id/posting_form', (req, res) => {
    db.query(`INSERT INTO products VALUES ($1, $2, $3, $4, $5, $6, $7)`, [req.body.name, req.body.image, req.body.type, req.body.description, req.body.quantity, req.body.price, req.params["user_id"]])
    .then(data => {
      // not sure if this res.json is correct
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });


  return router;

};
