const express = require('express');
const { productController } = require('../controllers');
const middlewares = require('../middlewares');

const productRouter = express.Router();

productRouter.get(
  '/',
  productController.getAllProducts,
);

productRouter.get(
  '/:id',
  productController.getProductById,
);

productRouter.post(
  '/',
  middlewares.validateName,
  productController.registerNewProduct,
);

module.exports = productRouter;
