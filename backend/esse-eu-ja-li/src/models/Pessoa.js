const { Model, DataTypes } = require("sequelize");

class Pessoa extends Model {
   static init(sequelize) {
      super.init(
         {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            pontos: DataTypes.INTEGER,
         },
         {
            sequelize,
            tableName: "pessoa",
         }
      );
   }
}

module.exports = Pessoa;
