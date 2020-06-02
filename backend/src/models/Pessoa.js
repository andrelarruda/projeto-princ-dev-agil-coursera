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

   static associate(models) {
      this.hasMany(models.Leitura, { foreignKey: "idPessoa", as: "leituras" });
      this.hasMany(models.Trofeu, { foreignKey: "idPessoa", as: "trofeus" });
   }
}

module.exports = Pessoa;
