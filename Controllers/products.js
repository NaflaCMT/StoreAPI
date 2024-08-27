const getAllProductsStatic = async (req, res) => {
  // res.status(200).json({ msg: "success" });

  throw new Error("testing async errors");
};
const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "something" });
};
module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
