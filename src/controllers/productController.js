const { productService } = require('../services');

async function getAllProducts(_req, res) {
  const allProducts = await productService.getAllProducts();
  return res.status(200).json(allProducts);
}

async function getProductById(req, res, next) {
  try {
    const { id: productId } = req.params;
    const productById = await productService.getProductById(productId);
    return res.status(200).json(productById);
  } catch (error) {
    return next(error);
  }
}

async function registerNewProduct(req, res, next) {
  try {
    const { name } = req.body;
    const insertId = await productService.registerNewProduct(name);
    return res.status(201).json({ id: insertId, name });
  } catch (error) {
    return next(error);
  }
}

async function updateProductById(req, res, next) {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await productService.updateProductById(id, name);
    return res.status(200).json({ id, name });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  updateProductById,
};
