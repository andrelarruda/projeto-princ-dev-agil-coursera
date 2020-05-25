"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("trofeu", {
         id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
         },
         idPessoa: {
            type: Sequelize.INTEGER,
            references: {
               model: "pessoa",
               key: "id",
            },
            allowNull: false,
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
         },
         idGenero: {
            type: Sequelize.INTEGER,
            references: {
               model: "genero",
               key: "id",
            },
            allowNull: false,
            onUpdate: "CASCADE",
            onDelete: "CASCADE",
         },
         titulo: {
            type: Sequelize.STRING,
            allowNull: false,
         },
         data: {
            type: Sequelize.DATE,
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
      return queryInterface.dropTable("trofeu");
   },
};
