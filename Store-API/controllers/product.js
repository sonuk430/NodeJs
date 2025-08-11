const getAllProductsStatics = async (req, res) => {
  try {
    res.status(200).json({ message: "Product testing route" });
  } catch (error) {
    console.log(error);
  }
};
const getAllProducts = async (req, res) => {
  try {
    res.status(200).json({ message: "Product route" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProductsStatics, getAllProducts };
