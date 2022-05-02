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
      comment: null,
      field: "id"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: null,
      field: "name"
    }
  };
  const options = {
    tableName: "language",
    comment: "",
    indexes: []
  };
  const LanguageModel = sequelize.define("language_model", attributes, options);
  return LanguageModel;
};