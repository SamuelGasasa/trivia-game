"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SavedQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SavedQuestion.init(
    {
      question: DataTypes.STRING,
      avg_rating: DataTypes.FLOAT,
      rating_count: DataTypes.INTEGER,
      right_answer: DataTypes.STRING,
      wrong_answers: DataTypes.STRING,
      used: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      sequelize,
      modelName: "SavedQuestion",
      tableName: "saved-questions",
      underscored: true,
    }
  );
  return SavedQuestion;
};
