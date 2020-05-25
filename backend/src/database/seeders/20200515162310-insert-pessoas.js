"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert("pessoa", [
         {
            id: 1,
            nome: "André Luiz",
            email: "andre@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 2,
            nome: "João José",
            email: "joaojose@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 3,
            nome: "Maria Luiza",
            email: "marialuiza@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 4,
            nome: "Olívia Palito",
            email: "oliviapalito@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 5,
            nome: "Fulano de Tal",
            email: "fulano@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 6,
            nome: "Severina Maria",
            email: "severina@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 7,
            nome: "Luiz Andrade",
            email: "luizandrade@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 8,
            nome: "Robert Monroe",
            email: "robermonroe@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 9,
            nome: "Livia Noris",
            email: "livia@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
         {
            id: 10,
            nome: "Joseph Cavalcanti",
            email: "cavalcjoseph@email.com",
            senha: "123456",
            createdAt: new Date(),
            updatedAt: new Date(),
         },
      ]);
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("pessoa", null, {});
   },
};
