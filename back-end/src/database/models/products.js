const ProductsModel = (sequelize, DataTypes) => {
  const products = sequelize.define('Products', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    urlImage: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    tableName: 'products',
    underscored: true,
  });

  return products;
};

module.exports = ProductsModel; 