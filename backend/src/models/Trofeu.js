const { Model, DataTypes } = require("sequelize");

class Trofeu extends Model {
   static init(sequelize) {
      super.init(
         {
            titulo: DataTypes.STRING,
            data: DataTypes.DATE,
         },
         {
            sequelize,
            tableName: "trofeu",
         }
      );
   }

   static associate(models) {
      this.belongsTo(models.Pessoa, { foreignKey: "idPessoa", as: "pessoa" });
      this.belongsTo(models.Genero, { foreignKey: "idGenero", as: "genero" });
   }
}

module.exports = Trofeu;
