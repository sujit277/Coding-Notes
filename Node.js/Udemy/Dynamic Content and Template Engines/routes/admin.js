const express = require('express');
const path = require('path');
const router = express.Router();

const products = [];

router.post('/product', (req, res, next) => {
    products.push(req.body);
    console.log(req.body);
    res.redirect('/');
})

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
})


/* router.get('/add-product', (req, res, next) => {
    res.send('<div style="text-align:center"><h1>Product Name</h1><form action="/product" method="POST"><input type="text" name="name" /><button type="submit">Submit</button></form></div>');
}) */

module.exports = { router, products };
