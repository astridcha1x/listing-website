const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // delete new favourites to db - LOOK INTO LATER
  router.post('/:user_id/delete_favourites/:favourite_id', (req, res) => {

    db.query(`DELETE FROM favourites WHERE user_id = $1 AND id = $2`, [req.params["user_id"], req.params["favourite_id"]]) // fav_delete: in user.ejs file, <button><input name='fav_delete'>
    .then( results => {
      console.log("res: ", results)
      // res.json(results.rows[0]);
      res.redirect(`/users/${req.params["user_id"]}`)
      // res.json(data.rows);
    })
    .catch(err => {

      res
        .status(500)
        .json({ error: err.message });
    });
  })

  /// fav/user_id/product
  // Adding new favourites from specific product page
  // input type=hidden to add the item to user's favs but not showing on product page
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
