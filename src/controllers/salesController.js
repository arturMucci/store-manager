const { salesService } = require('../services');

async function getAllSales(_req, res, next) {
  try {
    const response = await salesService.getAllSales();
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

async function getSaleById(req, res, next) {
  try {
    const { id } = req.params;
    const response = await salesService.getSalesById(id);
    return res
      .status(200)
      .json(response);
  } catch (error) {
    return next(error);
  }
}

async function registerNewSales(req, res, next) {
  try {
    const newSales = req.body;
    const response = await salesService.registerNewSales(newSales);
    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAllSales,
  getSaleById,
  registerNewSales,
};