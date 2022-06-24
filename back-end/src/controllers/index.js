const { userLogin } = require('./Login.controller');
const { registerController } = require('./Register.controller');
const { getProducts } = require('./Customer.controller');
const { getSales, createSales, getSaleById, updateStatusSale } = require('./Sales.controller');
const { getUsers, getUserById } = require('./User.contoller');

module.exports = {
  userLogin,
  registerController,
  getProducts,
  getSales,
  createSales,
  getUsers,
  getSaleById,
  getUserById,
  updateStatusSale,
};
