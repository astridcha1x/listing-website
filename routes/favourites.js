const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  // print all favourites for one user
  router.get('/:user_id',(req, res) => {
    db.query(`SELECT * FROM favourites WHERE user_id = $1;`, [req.params["user_id"]])
    // this only prints the first one in order of favourites... how do you print all?
    .then(data => {
      res.json(data.rows[0]);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  // add new favourites to db
  router.post

  return router;

};
