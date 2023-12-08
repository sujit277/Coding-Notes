const express = require("express");
const router = express.Router();
const productsList = ["Samsung Washing Machine", "Iphone 13", "Onepluse CE 2 Lite", 'Audi 450'];

// router.get('/shop', (req, res) => {
//     res.render('shop.ejs', { products: productsList, hasproducts: productsList.length > 0 });
// });

router.get('/shop', (req, res) => {
    res.render('shop.hbs', { products: productsList, hasproducts: productsList.length > 0 });
});

module.exports = router;