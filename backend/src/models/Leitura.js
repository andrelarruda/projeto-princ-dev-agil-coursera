const { Model, DataTypes } = require("sequelize");

class Leitura extends Model {
   static init(sequelize) {
      super.init(
         {
            data: DataTypes.DATE,
         },
         {
            sequelize,
            tableName: "leitura",
         }
      );
   }

   static associate(models) {
      this.belongsTo(models.Pessoa, { foreignKey: "idPessoa", as: "pessoa" });
      this.belongsTo(models.Livro, { foreignKey: "idLivro", as: "livro" });
      this.belongsTo(models.Genero, { foreignKey: "idGenero", as: "genero" });
   }
}

module.exports = Leitura;
