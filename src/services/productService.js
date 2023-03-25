const createError = require('http-errors');
const { productModel } = require('../models');

async function getAllProducts() {
  const allProducts = await productModel.getAllProducts();
  return allProducts;
}

async function getProductById(id) {
  const productById = await productModel.getProductById(id);
  if (!productById) throw createError(404, 'Product not found');
  return productById;
}

async function registerNewProduct(product) {
  const newProductId = await productModel.registerNewProduct(product);
  return newProductId;
}

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
};
