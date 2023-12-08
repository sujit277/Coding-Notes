const Product = require("../models/product");
const Order = require("../models/order");

getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("shop/product-list.ejs", {
        products: products,
        hasProducts: products.length > 0,
        isAuthenticated: req.session.isLoggedIn,
        // csrfToken: req.csrfToken()
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      res.render("shop/product-detail", {
        product: product,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getCart = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      productItems = user.cart.items;
      res.render("shop/cart.ejs", {
        products: productItems,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => req.user.addToCart(product))
    .then(() => {
      res.redirect("/");
    });
};

postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user  
    .removeFromCart(prodId)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

getOrders = (req, res, next) => {
  Order.find({ "user.userId": req.user._id }).then((orders) => {
    res.render("shop/orders.ejs", {
      orders: orders,
      isAuthenticated: req.session.isLoggedIn,
    });
  });
};

postOrder = (req, res, next) => {
  req.user
    .populate("cart.items.productId")
    .then((user) => {
      const products = user.cart.items.map((item) => {
        return { quantity: item.quantity, product: { ...item.productId._doc } };
      });
      const order = new Order({
        user: {
          email: req.user.email,
          userId: req.user,
        },
        products: products,
      });
      return order.save();
    })
    .then(() => req.user.clearCart())
    .then(() => res.redirect("/orders"))
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
