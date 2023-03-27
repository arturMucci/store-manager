const getAllProductsResponse = [
  {
    "saleId": 1,
    "date": "2023-03-26T19:56:49.000Z",
    "productId": 1,
    "quantity": 5,
  },
  {
    "saleId": 1,
    "date": "2023-03-26T19:56:49.000Z",
    "productId": 2,
    "quantity": 10,
  },
  {
    "saleId": 2,
    "date": "2023-03-26T19:56:49.000Z",
    "productId": 3,
    "quantity": 15,
  },
];

const getProductById1Response = [
  {
    "date": "2023-03-26T19:56:49.000Z",
    "productId": 1,
    "quantity": 5,
  },
  {
    "date": "2023-03-26T19:56:49.000Z",
    "productId": 2,
    "quantity": 10,
  },
];

const getProductById2Response = [
  {
    "date": "2023-03-26T19:56:49.000Z",
    "productId": 3,
    "quantity": 15,
  },
];

const getProductById404 = [];

module.exports = {
  getAllProductsResponse,
  getProductById1Response,
  getProductById2Response,
  getProductById404
};