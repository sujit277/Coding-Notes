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
  req.user
    .createProduct({
      name: name,
      imageUrl: imageUrl,
      price: price,
      description: description,
    })
    /*  Product.create({
        name: name,
        imageUrl: imageUrl,
        price: price,
        description: description,
        userId: req.user.id
    }) */ .then(() => {
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/");
};

getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  req.user
    .getProducts({ where: { id: prodId } })
    /* Product.findAll({ where: { id: prodId } }) */
    .then((product) => {
      if (!product[0]) {
        return res.redirect("/");
      }
      res.render("admin/edit-product.ejs", {
        product: product[0],
        editing: editMode,
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
  Product.findAll({ where: { id: prodId } })
    .then((product) => {
      product[0].name = updatedname;
      product[0].imageUrl = updatedImageUrl;
      product[0].price = updatedPrice;
      product[0].description = updatedDescription;
      product[0].save();
      return res.redirect("/");
    })
    .then(() => {
      console.log("Product Updated");
    })
    .catch((err) => {
      console.log(err);
    });
};

getProducts = (req, res, next) => {
  req.user
    .getProducts()
    /* Product.findAll() */
    .then((products) => {
      res.render("admin/index.ejs", {
        products: products,
        hasProducts: products.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findAll({ where: { id: prodId } })
    .then((product) => {
      return product[0].destroy();
    })
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
