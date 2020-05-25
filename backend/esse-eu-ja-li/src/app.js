const express = require("express");
const bodyParser = require("body-parser");

const app = express();

require("./database");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require("./routes");

app.use(routes);

module.exports = app;
