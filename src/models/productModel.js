const connection = require('../db/connection');

async function getAllProducts() {
  const query = 'SELECT * FROM StoreManager.products';
  const [allProducts] = await connection.execute(query);
  return allProducts;
}

async function getProductById(productId) {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[productById]] = await connection.execute(query, [productId]);
  return productById;
}

async function registerNewProduct(productName) {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [productName]);
  return insertId;
}

async function updateProductById(id, name) {
  const query = 'UPDATE products SET name = ? WHERE id = ?';
  const [updatedProduct] = await connection.execute(query, [name, id]);
  console.log(updatedProduct);
  return updatedProduct;
}

module.exports = {
  getAllProducts,
  getProductById,
  registerNewProduct,
  updateProductById,
};
