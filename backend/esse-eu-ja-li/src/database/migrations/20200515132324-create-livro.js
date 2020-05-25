"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("livro", {
         id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
         },
         titulo: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         autor: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         editora: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         ano: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         edicao: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         numPaginas: {
            type: Sequelize.INTEGER,
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
      return queryInterface.dropTable("livro");
   },
};
