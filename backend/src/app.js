const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

require("dotenv").config();

require("./database");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const routes = require("./routes");

app.use(routes);

module.exports = app;
