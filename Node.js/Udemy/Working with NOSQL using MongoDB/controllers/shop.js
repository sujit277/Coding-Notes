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
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getIndex = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("shop/index.ejs", {
        products: products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getCart = (req, res, next) => {
  req.user
    .getCart()
    .then((products) => {
      res.render("shop/cart.ejs", { products: products });
    })
    .catch((err) => {
      console.log(err);
    });
};

postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId)
    .then((product) => {
      return req.user.addToCart(product);
    })
    .then((result) => {
      res.redirect("/");
      console.log(result);
    });
};

postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then((cart) => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then((products) => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

getOrders = (req, res, next) => {
  req.user.getOrders({ include: ["products"] }).then((orders) => {
    res.render("shop/orders.ejs", { orders: orders });
  });
};

postOrder = (req, res, next) => {
  let productItems, fetchedCart;
  req.user
    .getCart()
    .then((cart) => {
      fetchedCart = cart;
      return cart.getProducts();
    })
    .then((products) => {
      productItems = products;
      return req.user.createOrder();
    })
    .then((order) => {
      return order.addProducts((product) => {
        product.orderItem = { qauntity: product.cartItem.qauntity };
        return product;
      });
    })
    .then(() => {
      fetchedCart.setProducts(null);
      res.redirect("/orders");
    })
    .then(() => {
      res.redirect("/orders");
    })
    .catch((err) => {
      console.log(err);
    });
};

getCheckout = (req, res, next) => {
  res.render("shop/checkout.ejs");
};

module.exports = {
  getProducts,
  getIndex,
  getCart,
  getCheckout,
  getOrders,
  getProduct,
  postCart,
  postCartDeleteProduct,
  postOrder,
};
