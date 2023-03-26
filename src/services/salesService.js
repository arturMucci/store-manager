const createError = require('http-errors');
const { salesModel } = require('../models');

async function getAllSales() {
  const response = await salesModel.getAllSales();
  return response;
}

async function getSalesById(id) {
  const response = await salesModel.getSaleById(id);
  if (response.length <= 0) throw createError(404, 'Sale not found');
  const filteredResponse = response
    .map(({ date, productId, quantity }) => ({ date, productId, quantity }));
  return filteredResponse;
}

async function registerNewSales(newSales) {
  const newSalesId = await salesModel.registerNewSales(newSales);
  return newSalesId;
}

module.exports = {
  getAllSales,
  getSalesById,
  registerNewSales,
};