const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // print all items
  router.get('/:type',(req, res) => {
    let type = req.params.type;
    let queryString = '';

    if (type === 'all') {
      queryString += `SELECT * FROM products;`;
    } else if (type === 'below20') {
      queryString += `SELECT * FROM products WHERE price >= 0 AND price <= 2000;`;
    } else if (type === '2040') {
      queryString += `SELECT * FROM products WHERE price >= 2000 AND price <= 4000;`;
    } else if (type === 'above40') {
      queryString += `SELECT * FROM products WHERE price >= 4000;`;
    } else if (type === 'indoor') {
      queryString += `SELECT * FROM products WHERE type = 'indoor';`;
    } else if (type === 'outdoor') {
      queryString += `SELECT * FROM products WHERE type = 'outdoor';`;
    }

    db.query(queryString)
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
