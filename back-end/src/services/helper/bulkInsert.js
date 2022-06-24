const bulkInsert = (idSale, products) => {
  const result = products.map((el) => {
    const saleProduct = {
      saleId: idSale,
      productId: el.id,
      quantity: el.quantity,
    };
    return saleProduct;
  });
  
  return result;
};

module.exports = {
  bulkInsert,
};
