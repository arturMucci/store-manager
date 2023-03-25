const { productService } = require('../services');

async function getAllProducts(_req, res) {
  const allProducts = await productService.getAllProducts();
  return res.status(200).json(allProducts);
}

async function getProductById(req, res, next) {
  try {
    const { id } = req.params;
    const productById = await productService.getProductById(id);
    return res.status(200).json(productById);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
};
