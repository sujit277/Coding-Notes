const Product = require("../models/product");

getAddProduct = (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  res.render("admin/edit-product.ejs", {
    editing: false,
    isAuthenticated: req.session.isLoggedIn,
  });
};

postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product({
    name: name,
    price: price,
    description: description,
    imageUrl: imageUrl,
    // userId: req.session.user._id,
    userId: req.user._id,
  });
  product
    .save()
    .then(() => {
      console.log("Product Created");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/admin/products");
      }
      res.render("admin/edit-product.ejs", {
        product: product,
        editing: editMode,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedname = req.body.name;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  Product.findById(prodId)
    .then((product) => {
      product.name = updatedname;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.imageUrl = updatedImageUrl;
      // product.userId = req.session.user._id;
      product.userId = req.user._id;
      return product.save();
    })
    .then(() => {
      res.redirect("/admin/products");
      console.log("Product Updated");
    })
    .catch((err) => {
      console.log(err);
    });
};

getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("admin/products.ejs", {
        products: products,
        hasProducts: products.length > 0,
        isAuthenticated: req.session.isLoggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByIdAndDelete(prodId)
    .then(() => {
      console.log("Product Deleted");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
};
