const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router.post("/add-product", AdminController.postAddProduct);

router.get("/add-product", AdminController.getAddProduct);

router.get("/products", AdminController.getProducts);

module.exports = router;
