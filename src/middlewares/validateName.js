const createError = require('http-errors');

function validateName(req, _res, next) {
  const { name } = req.body;
  if (!name) throw createError(400, '"name" is required');
  if (name.length < 5) throw createError(422, '"name" length must be at least 5 characters long');
  if (name >= 30) throw createError(422, '"name" length must be at most 5 characters long');
  return next();
}

module.exports = validateName;