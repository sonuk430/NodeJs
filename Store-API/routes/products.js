const express = require("express");

const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatics,
} = require("../controllers/product");

router.get("/", getAllProducts);
router.get("/static", getAllProductsStatics);

module.exports = router;
