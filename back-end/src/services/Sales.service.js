const moment = require('moment');
const { Sales, Users, SalesProducts, Products } = require('../database/models');
const { bulkInsert } = require('./helper/bulkInsert');

const getSales = async () => {
  const result = await Sales.findAll();
  return result;
};

const createSale = async (sale, products) => {
  const { email, mySeller, myAdress, myAdressNumber, totalCart } = sale;

  const user = await Users.findOne({ where: { email } });

  if (!user) return null;

  const mySale = {
    userId: user.id,
    sellerId: mySeller,
    totalPrice: totalCart.toFixed(2),
    deliveryAddress: myAdress,
    deliveryNumber: myAdressNumber,
    saleDate: moment().format(),
    status: 'Pendente',
  };

  const createdSale = await Sales.create(mySale);
  const resultInsert = bulkInsert(createdSale.id, products);

  const createdSalesProducts = await SalesProducts.bulkCreate(resultInsert);
  
  if (!createdSale) return null;

  return { createdSale, createdSalesProducts };
};

const getSaleById = async (id) => {
  const result = await Sales.findOne({
    where: { id },
    include: [{
      model: SalesProducts,
      as: 'MySales' },
      { model: Products,
      as: 'sales' },
    ],
  });

  return result;
};

const updateSaleById = async (id, status) => {
  const result = await Sales.update({ status }, { where: { id } });

  if (!result) return null;

  return result;
};

module.exports = {
  getSales,
  createSale,
  getSaleById,
  updateSaleById,
};