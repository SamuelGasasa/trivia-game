"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class capitals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  capitals.init(
    {
      country: DataTypes.STRING,
      capital: DataTypes.STRING,
      continent: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "capitals",
    },
  );
  return capitals;
};
