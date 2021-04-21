"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "question-type3",
      [
        {
          question: "Are there more people in X than in Y?",
          operator: true,
          field: "population",
        },
        {
          question: "Is X larger than Y?",
          operator: true,
          field: "area_km2",
        },
        {
          question: "Does X have a higher population density than Y?",
          operator: true,
          field: "density_pop_to_km2",
        },
        {
          question:
            "Is the quality of life in X higher than the quality of life in Y?",
          operator: true,
          field: "quality_of_life_index",
        },
        {
          question: "Is the crime rate of X higher than the crime rate in Y?",
          operator: true,
          field: "crime_index",
        },
        {
          question:
            "Are restaurants in X more expensive than restaurants in Y?",
          operator: true,
          field: "restaurant_price_index",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("question-type3", null, {});
  },
};
