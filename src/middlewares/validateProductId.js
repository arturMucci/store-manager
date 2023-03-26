const createError = require('http-errors');

function validateProductId(req, _res, next) {
  const { productId } = req.body;
  if (!productId) return next(createError(400, '"productId" is required'));
  return next();
}

module.exports = validateProductId;