const Product = require('../models/product');
const User = require('../models/user');
const item_per_page = 2;

getProducts = (req, res, next) => {
    Product.find().then((products) => {
        res.render('shop/product-list.ejs', { products: products, pageTitle: 'Shop', hasProducts: products.length > 0, isAuthenticated: req.isLoggedIn })
    }).catch((err) => {
        console.log(err);
    })
}

getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId).then((product) => {
        res.render('shop/product-detail', {
            product: product, isAuthenticated: req.isLoggedIn
        })
    }).catch((err) => {
        console.log(err);
    })
}

getIndex = (req, res, next) => {
    const page = Number(req.query.page) || 1;
    let totalItems;
    Product.find().countDocuments().then(numProducts => {
        totalItems = numProducts;
        return Product.find().skip((page - 1) * item_per_page).limit(item_per_page).then((products) => {
            res.render('shop/index.ejs', {
                products: products, pageTitle: 'Shop',
                hasProducts: products.length > 0,
                isAuthenticated: req.isLoggedIn,
                currentPage: page,
                hasNextPage: (item_per_page * page) < totalItems,
                hasPreviousPage: page > 1,
                nextPage: page + 1,
                previousPage: page - 1,
                lastPage: Math.ceil(totalItems / item_per_page)
            });
        })
    }).catch((err) => {
        console.log(err);
    })
}

getCart = (req, res, next) => {
    req.user.populate('cart.items.productId').then((user) => {
        productItems = user.cart.items;
        res.render('shop/cart.ejs', { products: productItems, isAuthenticated: req.isLoggedIn });
    }).catch((err) => {
        console.log(err);
    })
}

postCart = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId).then((product) => {
        return req.user.addToCart(product);
    }).then((result) => {
        res.redirect('/');
        console.log(result);
    })
}

postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    req.user.removeFromCart(prodId).then(() => {
        res.redirect('/');
    }).catch((err) => {
        console.log(err);
    })
}

getOrders = (req, res, next) => {
    req.user.getOrders({ include: ['products'] }).then((orders) => {
        res.render('shop/orders.ejs', { orders: orders });
    })
}

postOrder = (req, res, next) => {
    let productItems, fetchedCart;
    req.user.getCart().then((cart) => {
        fetchedCart = cart;
        return cart.getProducts();
    }).then((products) => {
        productItems = products;
        return req.user.createOrder();
    }).then((order) => {
        return order.addProducts((product) => {
            product.orderItem = { qauntity: product.cartItem.qauntity };
            return product;
        });
    }).then(() => {
        fetchedCart.setProducts(null);
        res.redirect('/orders');
    }).then(() => {
        res.redirect('/orders');
    }).catch((err) => {
        console.log(err);
    })
}


module.exports = { getProducts, getIndex, getCart, getOrders, getProduct, postCart, postCartDeleteProduct, postOrder }