"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("leitura", "pontos");
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("leitura", "pontos", {
         type: Sequelize.INTEGER,
         allowNull: true,
         before: "data",
      });
   },
};
