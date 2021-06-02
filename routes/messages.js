const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/:user_id", (req, res) => {
    const dateStart = `SELECT date_time FROM message_master WHERE sender_id = $1;`;
    const details = `SELECT * FROM message_details;`;

    const messageStartPromise = db.query(dateStart, [req.params["user_id"]]);
    const detailsPromise = db.query(details);
    const promises = [messageStartPromise, detailsPromise];

    Promise.all(promises)
      .then(results => {
        const dateStart = results[0].rows[0]["date_time"];

        // results[1] -- the 1 is = message_details.id - 1
        // prints every
        const sender = results[1].rows[1]["sender_id"];
        const user = results[1].rows[1]["receiver_id"];
        const timeReceived = results[1].rows[1]["date_time"];
        const textReceived = results[1].rows[1]["message_text"];

        const templateVars = {dateStart, sender, user, timeReceived, textReceived};

        res.render('messages', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    });

  router.post("/message", (req, res) => {

    const message = req.body.message;

    db.query(`INSERT INTO message_details (sender_id, receiver_id, date_time, message_text) VALUES (1, 2, '2021-05-27', $1) RETURNING *;`, [message])
    .then(data => {
      const sender_id = data.rows[0]["sender_id"];
      const receiver_id = data.rows[0]["receiver_id"];
      const date_time = data.rows[0]["date_time"];
      const message_text = data.rows[0]["message_text"];

      const templateVars = {sender_id, receiver_id, date_time, message_text};

      res.json(templateVars);

    })
    ;

  })

  return router;
};
