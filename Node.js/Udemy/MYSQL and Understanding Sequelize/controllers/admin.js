const Product = require("../models/product");

// When we do associations Sequelize provides us magical methods

getAddProduct = (req, res, next) => {
  res.render("admin/edit-product.ejs", {
    editing: false,
  });
};

postAddProduct = (req, res, next) => {
  const name = req.body.name;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // whenever we create product we should associate them with user 
  req.user
    .createProduct({
      name: name,
      imageUrl: imageUrl,
      price: price,
      description: description,
    })
    .then(() => res.redirect("/admin/products"))
    .catch((err) => console.log(err));
  res.redirect("/admin/products");
};

getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/admin/products");
  }
  const prodId = req.params.productId;
   // Only That user is allowed to edit product who created that product
  req.user
    .getProducts({ where: { id: prodId } })
    .then((products) => {
      const product = products[0];
      if (!product) {
        return res.redirect("/admin/products");
      }
      res.render("admin/edit-product.ejs", {
        product: product,
        editing: editMode,
      });
    })
    .catch((err) => console.log(err));
};

postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedname = req.body.name;
  const updatedImageUrl = req.body.imageUrl;
  const updatedPrice = req.body.price;
  const updatedDescription = req.body.description;
  Product.findByPk(prodId)
    .then((product) => {
      product.name = updatedname;
      product.imageUrl = updatedImageUrl;
      product.price = updatedPrice;
      product.description = updatedDescription;
      product.save();
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

getProducts = (req, res, next) => {
  // Getting only those products which are created by the user
  req.user
    .getProducts()
    .then((products) => {
      res.render("admin/admin-products.ejs", {
        products: products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => console.log(err));
};

postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then((product) => {
      return product.destroy();
    })
    .then(() => res.redirect("/admin/products"))
    .catch((err) => console.log(err));
};

module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts,
  getEditProduct,
  postEditProduct,
  postDeleteProduct,
};
