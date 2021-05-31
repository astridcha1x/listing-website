/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        console.log("HELLO");
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get('/:user_id',(req, res) => {
    //user's data
    db.query(`SELECT * FROM users WHERE id = $1;`, [req.params["user_id"]])
    .then(data => {
      res.json(data.rows[0]);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  router.post('/:user_id/delete_favourite',()=>{
    //deletes items from favourites on user's page
  })

  return router;

};
