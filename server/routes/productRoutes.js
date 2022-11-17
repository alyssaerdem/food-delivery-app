const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.post("/", productController.createNewProduct);
router.delete("/", productController.deleteProduct);

module.exports = router;