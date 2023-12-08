const Product = require("../models/product");

getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list.ejs", {
      products: products,
      hasProducts: products.length > 0,
    });
  });
};

module.exports = { getProducts };
