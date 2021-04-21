"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Capital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.CountryGeneral, { foreignKey: "country" });
    }
  }
  Capital.init(
    {
      country: DataTypes.STRING,
      capital: DataTypes.STRING,
      continent: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Capital",
      tableName: "capitals",
      underscored: true,
    }
  );
  return Capital;
};
