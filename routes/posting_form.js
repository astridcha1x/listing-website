const { Template } = require('ejs');
const express = require('express');
const router  = express.Router();


module.exports = (db) => {
  router.post("/new_post", (req, res) => {
    const productName = req.body.name;
    const productPrice = Number(req.body.price);
    const productDesc = req.body.desc;
    const productImg = req.body.img;
    const productType = req.body.type;
    const productQty = Number(req.body.qty);
    const productUserId = req.session.userID;

    db.query(`INSERT INTO products (name, price, description, image, type, quantity, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`, [productName, productPrice, productDesc, productImg, productType, productQty, productUserId])
    .then(results => {
      res.redirect(`/users/${productUserId}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })

  router.get("/", (req, res) => {
    db.query('SELECT * FROM products')
      .then( results => {
        res.render('post_product')
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};
