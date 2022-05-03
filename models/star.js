const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Star extends Model {}

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        key: 'id',
        model: 'post',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        key: 'id',
        model: 'user',
      },
    },
  };
  const options = {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'star',
  };

Star.init(attributes, options);
module.exports = Star;