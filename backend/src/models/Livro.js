const { Model, DataTypes } = require("sequelize");

class Livro extends Model {
   static init(sequelize) {
      super.init(
         {
            titulo: DataTypes.STRING,
            autor: DataTypes.STRING,
            editora: DataTypes.STRING,
            ano: DataTypes.STRING,
            edicao: DataTypes.STRING,
            numPaginas: DataTypes.INTEGER,
         },
         {
            sequelize,
            tableName: "livro",
         }
      );
   }
}

module.exports = Livro;
