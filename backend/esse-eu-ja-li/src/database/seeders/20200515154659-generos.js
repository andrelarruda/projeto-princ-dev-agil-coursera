"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("genero", [
         {
            id: 1,
            nome: "Fantasia",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 2,
            nome: "Biografia",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 3,
            nome: "Poesia",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 4,
            nome: "Romance",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 5,
            nome: "Outros",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ]);
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("genero", null, {});
   },
};
