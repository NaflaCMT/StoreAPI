const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
} = require("../Controllers/products");

router.route("/static").get(getAllProductsStatic);
router.route("/").get(getAllProducts);

module.exports = router;
