const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  router.get("/:msg_master_id", (req, res) => {
    const dateStart = `SELECT date_time FROM message_master WHERE id = $1;`;
    const details = `SELECT * FROM message_details WHERE message_master_id = $1;`;

    const messageStartPromise = db.query(dateStart, [req.params["msg_master_id"]]);
    const detailsPromise = db.query(details, [req.params["msg_master_id"]]);
    const promises = [messageStartPromise, detailsPromise];

    Promise.all(promises)
      .then(results => {

        const date_start = results[0].rows;
        const message = results[1].rows;
        const templateVars = {date_start, message};

        res.render('messages', templateVars);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

    });

  router.post("/:msg_master_id", (req, res) => {

    const message = req.body.message;
    console.log("req.params: ", req.params["msg_master_id"]);

    db.query(`INSERT INTO message_details (sender_id, date_time, message_text, message_master_id) VALUES (1, $2, $1, $3) RETURNING *;`, [message, new Date(), Number(req.params["msg_master_id"])])
    .then(data => {
      const sender_id = data.rows[0]["sender_id"];
      const date_time = data.rows[0]["date_time"];
      const message_text = data.rows[0]["message_text"];

      const templateVars = {sender_id, date_time, message_text};

      res.json(templateVars);

    })
    ;

  })

  return router;
};
