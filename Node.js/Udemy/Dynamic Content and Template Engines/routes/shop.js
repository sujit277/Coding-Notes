const express = require("express");
const path = require("path");
const { products } = require("./admin");
const router = express.Router();
const productsList = ["Samsung Washing Machine", "Iphone 13", "Onepluse CE 2 Lite", 'Audi 450'];

/* router.get('/shop', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
}) */

/* router.get('/shop', (req, res) => {
    res.render('shop', { product: "Oneplus CE note 2 Lite" });
}) */

router.get('/shop', (req, res) => {
    res.render('shop.ejs', { products: productsList, hasproducts: productsList.length > 0 });
})

module.exports = router;