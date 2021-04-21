'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class healthcare_index extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  healthcare_index.init({
    country: DataTypes.STRING,
    healthcare_index: DataTypes.INTEGER,
    healthcare_exp_index: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'healthcare_index',
    underscored: true,
  });
  return healthcare_index;
};