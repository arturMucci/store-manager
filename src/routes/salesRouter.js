const express = require('express');

const salesRouter = express.Router();

const { salesController } = require('../controllers');
// const middlewares = require('../middlewares');

salesRouter.get(
  '/:id',
  salesController.getSaleById,
  );

salesRouter.get(
  '/',
  salesController.getAllSales,
);

salesRouter.post(
  '/',
  // middlewares.validateSaleReq,
  salesController.registerNewSales,
);

module.exports = salesRouter;