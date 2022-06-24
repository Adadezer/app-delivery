const SalesProductsModel = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'sales_products',
  });

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      through: SalesProducts, foreignKey: 'saleId', otherKey: 'productId', as: 'sales',
    });

    models.Products.belongsToMany(models.Sales, {
      through: SalesProducts, foreignKey: 'productId', otherKey: 'saleId', as: 'products',
    });

    models.Sales.hasMany(models.SalesProducts, { as: 'MySales', foreignKey: 'saleId' });
    models.Products.hasMany(models.SalesProducts, { as: 'MyProducts', foreignKey: 'productId' });
  }


  return SalesProducts;
};

module.exports = SalesProductsModel;
