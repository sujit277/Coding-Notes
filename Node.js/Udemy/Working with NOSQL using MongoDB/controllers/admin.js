const Product = require("../models/product");

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
  const product = new Product(
    null,
    name,
    price,
    description,
    imageUrl,
    req.user._id
  );
  product
    .save()
    .then(() => res.redirect("/admin/products"))
    .catch((err) => console.log(err));
};

getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/admin/products");
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
  const product = new Product(
    prodId,
    updatedname,
    updatedPrice,
    updatedDescription,
    updatedImageUrl,
    req.user._id
  );
  product
    .save()
    .then(() => res.redirect("/admin/products"))
    .catch((err) => console.log(err));
};

getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products.ejs", {
        products: products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => console.log(err));
};

getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products.ejs", {
        products: products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => console.log(err));
};

postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
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
