"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("genero", {
         id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
         },
         nome: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
         },
         updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
         },
      });
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("genero");
   },
};
