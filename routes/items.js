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


};
