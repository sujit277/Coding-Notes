const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

router.post('/add-product', isAuth, AdminController.postAddProduct);

router.get('/add-product', isAuth, AdminController.getAddProduct);

router.get('/products', isAuth, AdminController.getProducts);

router.get('/edit-product/:productId', isAuth, AdminController.getEditProduct);

router.post('/edit-product', isAuth, AdminController.postEditProduct);

router.post('/delete-product', isAuth, AdminController.postDeleteProduct);

module.exports = router;
