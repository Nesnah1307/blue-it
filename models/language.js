const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Language extends Model {}

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(32),
      // allowNull: false,
    },
  };
  const options = {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'language',
  };
Language.init(attributes, options);
module.exports = Language;