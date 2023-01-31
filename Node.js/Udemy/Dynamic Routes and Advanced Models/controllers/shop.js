const Product = require('../models/product');
const Cart = require('../models/cart');

getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list.ejs', { products: products, pageTitle: 'Shop', hasProducts: products.length > 0 })
    });
}

getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, (product) => {
        res.render('shop/product-detail', {
            product: product
        })
    })
}

getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index.ejs', {
            products: products, pageTitle: 'Shop', hasProducts: products.length > 0
        });
    })
}

getCart = (req, res, next) => {
    res.render('shop/cart.ejs', {});
}

postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
    })
    console.log(prodId);
    res.redirect('/');
}

getOrders = (req, res, next) => {
    res.render('shop/orders.ejs', {});
}

getCheckout = (req, res, next) => {
    res.render('shop/checkout.ejs');
}

module.exports = { getProducts, getIndex, getCart, getCheckout, getOrders, getProduct, postCart }