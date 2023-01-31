const Product = require('../models/product');

getAddProduct = (req, res, next) => {
    res.render('admin/add-product.ejs', { pageTitle: 'Add-Product' })
}

postAddProduct = (req, res, next) => {
    const name = req.body.name;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(name, imageUrl, price, description);
    console.log(product);
    product.save();
    res.redirect('/');
}

getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index.ejs', {
            products: products, pageTitle: 'Shop', hasProducts: products.length > 0,
        });
    })
}

module.exports = { getAddProduct, postAddProduct, getProducts };