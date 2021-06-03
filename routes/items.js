const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // print all items
  router.get('/',(req, res) => {
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
