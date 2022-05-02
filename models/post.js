const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      field: "title"
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: null,
      field: "answer"
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "type_id",
      references: {
        key: "id",
        model: "type_model"
      }
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "language_id",
      references: {
        key: "id",
        model: "language_model"
      }
    },
    difficulty_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "difficulty_id",
      references: {
        key: "id",
        model: "difficulty_model"
      }
    },
    creator_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      field: "creator_id",
      references: {
        key: "id",
        model: "user_model"
      }
    }
  };
  const options = {
    tableName: "post",
    comment: "",
    indexes: [{
      name: "difficulty_id",
      unique: false,
      type: "BTREE",
      fields: ["difficulty_id"]
    }, {
      name: "language_id",
      unique: false,
      type: "BTREE",
      fields: ["language_id"]
    }, {
      name: "type_id",
      unique: false,
      type: "BTREE",
      fields: ["type_id"]
    }, {
      name: "creator_id",
      unique: false,
      type: "BTREE",
      fields: ["creator_id"]
    }]
  };
  const PostModel = sequelize.define("post_model", attributes, options);
  return PostModel;
};