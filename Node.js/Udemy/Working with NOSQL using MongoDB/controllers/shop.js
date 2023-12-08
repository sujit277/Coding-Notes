const Product = require("../models/product");
const User = require("../models/user");

getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("shop/product-list.ejs", {
        products: products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => console.log(err));
};

getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
      });
    })
    .catch((err) => console.log(err));
};

getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((products) => {
      res.render("shop/cart.ejs", { products: products });
    })
    .catch((err) => console.log(err));
};

postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then(() => {
      res.redirect("/");
    });
};

postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .deleteItemFromCart(prodId)
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
};

getOrders = (req, res, next) => {
  req.user.getOrders().then((orders) => {
    res.render("shop/orders.ejs", { orders: orders });
  });
};

postOrder = (req, res, next) => {
  req.user
    .addOrder()
    .then(() => {
      res.redirect("/orders");
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getProducts,
  getCart,
  getOrders,
  getProduct,
  postCart,
  postCartDeleteProduct,
  postOrder,
};
