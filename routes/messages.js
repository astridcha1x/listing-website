const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/:msg_master_id/:user_id", (req, res) => {
    const userId = req.params["user_id"];
    req.session.userID = userId;
    const dateStart = `SELECT date_time FROM message_master WHERE id = $1;`;
    const details = `SELECT message_details.* , users.name as name FROM message_details JOIN users ON users.id = sender_id WHERE message_master_id = $1;`;


    const messageStartPromise = db.query(dateStart, [req.params["msg_master_id"]]);
    const detailsPromise = db.query(details, [req.params["msg_master_id"]]);
    const promises = [messageStartPromise, detailsPromise];

    Promise.all(promises)
      .then(results => {

        const date_start = results[0].rows[0].date_time;
        console.log("dateStart: ", date_start);
        const message = results[1].rows;
        console.log("message: ", message);
        const templateVars = {userId, date_start, message};

        res.render('messages', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    });

  router.post("/messages", (req, res) => {
    const userID = req.session.userID;
    console.log("userID: ", userID);

    const message = req.body.message;

    db.query(`INSERT INTO message_details (sender_id, date_time, message_text, message_master_id) VALUES ($1, $2, $3, 1) RETURNING *;`, [userID, new Date(), message])

    .then(data => {
      const sender_id = data.rows[0]["sender_id"];
      const date_time = data.rows[0]["date_time"];
      const message_text = data.rows[0]["message_text"];

      db.query(`SELECT name FROM users WHERE id = $1`,[sender_id])
      .then(results => {
      // console.log("data.rows[0]: ", data.rows[0]);
        // console.log("results: ",results);
        const name = results.rows[0].name;
        const templateVars = {sender_id, date_time, message_text, name};
      res.json(templateVars);
      })
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

  })

  return router;
};
