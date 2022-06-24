const service = require('../services/index');

const getProducts = async (_req, res) => {
  try {
    const products = await service.getProducts();

    if (products === null) return res.status(404).json({ message: 'Not Found' });

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
};