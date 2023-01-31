const Product = require('../models/product');

getAddProduct = (req, res, next) => {
    res.render('admin/edit-product.ejs', { pageTitle: 'Add-Product', editing: false })
}

postAddProduct = (req, res, next) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(null, name, imageUrl, price, description);
    product.save();
    res.redirect('/');
}

getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        if (!product) {
            return res.redirect('/');
        }
        res.render('admin/edit-product.ejs', { product: product, editing: editMode });
    })

}

postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedname = req.body.name;
    const updatedImageUrl = req.body.imageUrl;
    const updatedPrice = req.body.price;
    const updatedDescription = req.body.description;
    const updatedProduct = new Product(prodId, updatedname, updatedImageUrl, updatedPrice, updatedDescription);
    updatedProduct.save();
    res.redirect("/");
}


getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index.ejs', {
            products: products, pageTitle: 'Shop', hasProducts: products.length > 0,
        });
    })
}

module.exports = { getAddProduct, postAddProduct, getProducts, getEditProduct, postEditProduct };