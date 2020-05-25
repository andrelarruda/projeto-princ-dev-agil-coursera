"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("leitura", {
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
               onUpdate: "CASCADE",
               onDelete: "CASCADE",
            },
            allowNull: false,
         },
         idLivro: {
            type: Sequelize.INTEGER,
            references: {
               model: "livro",
               key: "id",
               onUpdate: "CASCADE",
               onDelete: "SET NULL",
            },
            allowNull: false,
         },
         idGenero: {
            type: Sequelize.INTEGER,
            references: {
               model: "genero",
               key: "id",
               onUpdate: "CASCADE",
               onDelete: "SET NULL",
            },
            allowNull: false,
         },
         pontos: {
            type: Sequelize.INTEGER,
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
      return queryInterface.dropTable("leitura");
   },
};
