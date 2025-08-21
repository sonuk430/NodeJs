const Product = require("../models/product");

const getAllProductsStatics = async (req, res) => {
  try {
    const products = await Product.find({}).sort("-name price");
    res.status(200).json({ products, Hits: products.length });
  } catch (error) {
    console.log(error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const { featured, rating, name, sort } = req.query;

    const queryObject = {};

    if (featured) {
      queryObject.featured = featured === "true" ? true : false;
    }
    if (rating) {
      queryObject.rating = rating;
    }

    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    console.log(queryObject);
    const products = await Product.find(queryObject);
    res.status(200).json({ products, hits: products.length });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProductsStatics, getAllProducts };
