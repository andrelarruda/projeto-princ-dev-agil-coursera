"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("leitura", "idGenero");
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("leitura", "idGenero", {
         type: Sequelize.INTEGER,
         references: {
            model: "genero",
            key: "id",
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
         },
         allowNull: false,
         after: "idLivro",
      });
   },
};
