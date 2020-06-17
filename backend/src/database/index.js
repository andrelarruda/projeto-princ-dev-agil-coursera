const Sequelize = require("sequelize");
const configuration = require("../config/database.js");

const config =
   process.env.NODE_ENV === "test"
      ? configuration.test
      : configuration.development;

const Pessoa = require("../models/Pessoa");
const Livro = require("../models/Livro");
const Genero = require("../models/Genero");
const Leitura = require("../models/Leitura");
const Trofeu = require("../models/Trofeu");

const connection = new Sequelize(config);

Pessoa.init(connection);
Livro.init(connection);
Genero.init(connection);
Leitura.init(connection);
Trofeu.init(connection);

Pessoa.associate(connection.models);
Livro.associate(connection.models);
Genero.associate(connection.models);
Leitura.associate(connection.models);
Trofeu.associate(connection.models);

module.exports = connection;
