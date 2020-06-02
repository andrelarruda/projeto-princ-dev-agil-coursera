const { Model, DataTypes } = require("sequelize");

class Genero extends Model {
   static init(sequelize) {
      super.init(
         {
            nome: DataTypes.STRING,
         },
         {
            sequelize,
            tableName: "genero",
         }
      );
   }

   static associate(models) {
      this.hasMany(models.Livro, { foreignKey: "idGenero", as: "livros" });
      this.hasMany(models.Trofeu, { foreignKey: "idGenero", as: "trofeus" });
   }
}

module.exports = Genero;
