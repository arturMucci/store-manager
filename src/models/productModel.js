const connection = require('../db/connection');

async function getAllProducts() {
  const query = 'SELECT * FROM StoreManager.products';
  const [allProducts] = await connection.execute(query);
  return allProducts;
}

async function getProductById(id) {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[productById]] = await connection.execute(query, [id]);
  return productById;
}

module.exports = {
  getAllProducts,
  getProductById,
};
