const createError = require('http-errors');
const { productModel } = require('../models');

async function getAllProducts() {
  const allProducts = await productModel.getAllProducts();
  return allProducts;
}

async function getProductById(productId) {
  const productById = await productModel.getProductById(productId);
  if (!productById) throw createError(404, 'Product not found');
  return productById;
}

async function registerNewProduct(product) {
  const newProductId = await productModel.registerNewProduct(product);
  return newProductId;
}

async function updateProductById(id, name) {
  const updatedProduct = await productModel.updateProductById(id, name);
  if (updatedProduct.affectedRows !== 1) throw createError(404, 'Product not found');
  return updatedProduct;
}

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  updateProductById,
};
