const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      key: 'id',
      model: 'user',
    },
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      key: 'id',
      model: 'post',
    },
  },
};
const options = {
  sequelize,
  freezeTableName: true,
  underscored: true,
  modelName: 'comment',
};

Comment.init(attributes, options);
module.exports = Comment;
