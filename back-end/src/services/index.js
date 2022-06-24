const { loginUser } = require('./Login.service');
const { registerUserService } = require('./Register.service');
const { getProducts } = require('./Customer.service');
const { getSales, createSale, getSaleById, updateSaleById } = require('./Sales.service');
const { getUsers, getUserById } = require('./User.service');

module.exports = {
  loginUser,
  registerUserService,
  getProducts,
  getSales,
  createSale,
  getUsers,
  getSaleById,
  getUserById,
  updateSaleById,
};
