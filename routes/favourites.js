const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // delete new favourites to db - LOOK INTO LATER
  router.post('/:user_id/delete_favourites', () => {
    db.query(`DELETE FROM favourites WHERE user_id = $1 AND product_id = $2`, [req.params["user_id"], req.body['']])
    .then(data => {
      res.json(data.rows);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  /// fav/user_id/product
  // Adding new favourites from specific product page
  router.post('/:user_id/:product_id',(req, res) => {
    db.query(`INSERT INTO favourites (user_id, product_id) VALUES ($1, $2)`, [req.params["user_id"],req.params["product_id"]])
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

};
