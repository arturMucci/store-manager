const createError = require('http-errors');

function validateQuantity(req, res, next) {
  const { quantity } = req.body;
  if (!quantity) return next(createError(400, '"quantity" is required'));
  return next();
}

module.exports = validateQuantity;