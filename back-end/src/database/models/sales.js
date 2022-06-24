const SalesModel = (sequelize, DataTypes) => {
  const sales = sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'sales',
  });

  sales.associate = (models) => {
    sales.belongsTo(models.Users, { as: 'user', foreignKey: 'user_id' })
    sales.belongsTo(models.Users, { as: 'seller', foreignKey: 'seller_id' })
  }

  return sales;
};

module.exports = SalesModel; 
