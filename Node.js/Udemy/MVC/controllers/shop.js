const Product = require("../models/product");

getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list.ejs", {
      products: products,
      hasProducts: products.length > 0,
    });
  });
};

getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index.ejs", {
      products: products,
      hasProducts: products.length > 0,
    });
  });
};

getCart = (req, res, next) => {
  res.render("shop/cart.ejs");
};

getOrders = (req, res, next) => {
  res.render("shop/orders.ejs");
};

getCheckout = (req, res, next) => {
  res.render("shop/checkout.ejs");
};

module.exports = { getProducts, getIndex, getCart, getCheckout, getOrders };
