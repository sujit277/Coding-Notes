const Product = require("../models/product");

getAddProduct = (req, res, next) => {
  res.render("admin/add-product.ejs");
};

postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(name, imageUrl, price, description);
  product.save();
  res.redirect("/admin/products");
};

getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products.ejs", {
      products: products,
      hasProducts: products.length > 0,
    });
  });
};

module.exports = { getAddProduct, postAddProduct, getProducts };
