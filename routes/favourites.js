const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // delete new favourites to db
  router.post('/:user_id/delete_favourites/:favourite_id', (req, res) => {

    db.query(`DELETE FROM favourites WHERE user_id = $1 AND id = $2`, [req.params["user_id"], req.params["favourite_id"]])
    .then( results => {
      res.redirect(`/users/${req.params["user_id"]}`)
    })
    .catch(err => {

      res
        .status(500)
        .json({ error: err.message });
    });
  })

  // Adding new favourites from specific product page
  router.post('/:user_id/:product_id',(req, res) => {
    db.query(`INSERT INTO favourites (user_id, product_id) VALUES ($1, $2)`, [req.params["user_id"],req.params["product_id"]])
    .then(data => {
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
