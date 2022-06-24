const { Products } = require('../database/models');

const getProducts = async () => {
  const result = await Products.findAll();

  if (!result) return null;

  return result;
};

module.exports = {
  getProducts,
};