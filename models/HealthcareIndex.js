"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HealthcareIndex extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.CountryGeneral, { foreignKey: "country" });
    }
  }
  HealthcareIndex.init(
    {
      country: DataTypes.STRING,
      healthcare_index: DataTypes.INTEGER,
      healthcare_exp_index: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HealthcareIndex",
      modelName: "healthcare_index",
      underscored: true,
    }
  );
  return HealthcareIndex;
};
