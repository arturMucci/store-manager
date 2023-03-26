const connection = require('../db/connection');

const getAllSalesQuery = [
  'SELECT s.id saleId, s.date, sp.product_id productId',
  ' sp.quantity FROM sales s INNER JOIN sales_products sp ON s.id = sp.sale_id ORDER BY saleId',
  'productId',
];

const concatString = (string1, string2, string3) => string1 + string2 + string3;

async function getAllSales() {
  const [allSales] = await connection.execute(getAllSalesQuery.join());
  return allSales;
}

async function getSaleById(id) {
  const getSaleByIdQuery1 = 'SELECT s.id saleId, s.date, sp.product_id productId, sp.quantity ';
  const getSaleByIdQuery2 = 'FROM sales s INNER JOIN sales_products sp ON s.id = sp.sale_id ';
  const getSaleByIdQuery3 = 'HAVING saleId = ? ORDER BY saleId, productId';
  const [saleById] = await connection.execute(concatString(
    getSaleByIdQuery1,
    getSaleByIdQuery2,
    getSaleByIdQuery3,
    ),
    [id]);
  return saleById;
}

async function registerNewSales(newSales) {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const newSalesIds = Promise.all(newSales.map(async (sale) => {
    const [{ insertId }] = await connection.execute(query, [sale]);
    return insertId;
  }));
  return newSalesIds;
}

module.exports = {
  getAllSales,
  getSaleById,
  registerNewSales,
};