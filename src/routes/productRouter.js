const express = require('express');
const { productController } = require('../controllers');

const productRouter = express.Router();

productRouter.get('/:id', productController.getProductById);
productRouter.get('/', productController.getAllProducts);

module.exports = productRouter;
