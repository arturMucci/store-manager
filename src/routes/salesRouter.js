const express = require('express');

const salesRouter = express.Router();

const { salesController } = require('../controllers');
// const middlewares = require('../middlewares');

// salesRouter.post(
//   '/',
//   middlewares.validateProductId,
//   middlewares.validateQuantity,
//   salesController.registerNewSales,
// );

salesRouter.get(
  '/:id',
  salesController.getSaleById,
);

salesRouter.get(
  '/',
  salesController.getAllSales,
);

module.exports = salesRouter;