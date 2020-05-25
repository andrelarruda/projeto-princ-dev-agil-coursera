"use strict";

module.exports = {
   up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn("livro", "idGenero", {
         type: Sequelize.INTEGER,
         references: {
            model: "genero",
            key: "id",
         },
         allowNull: false,
         after: "numPaginas",
         onUpdate: "CASCADE",
         onDelete: "CASCADE",
      });
   },

   down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn("livro", "idGenero");
   },
};
