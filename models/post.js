const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        key: 'id',
        model: 'type',
      },
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: {
        key: 'id',
        model: 'language',
      },
    },
    difficulty_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        key: 'id',
        model: 'difficulty',
      },
    },
    creator_id: {
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
    modelName: 'post',
  };

Post.init(attributes, options);
module.exports = Post;