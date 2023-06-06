const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Product extends Model {}

Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Suitable for currency
      allowNull: false,
      validate: {
        isDecimal: true // Validate that input is a decimal
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Default value if none is provided
      validate: {
        isNumeric: true // Validate that input is a number
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category', // This is a reference to another model
        key: 'id', // This is the column name of the referenced model
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
