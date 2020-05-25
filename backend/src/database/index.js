const Sequelize = require("sequelize");
const configuration = require("../config/database.js");

const config =
   process.env.NODE_ENV === "test"
      ? configuration.test
      : configuration.development;

const Pessoa = require("../models/Pessoa");

const connection = new Sequelize(config);

Pessoa.init(connection);

module.exports = connection;
