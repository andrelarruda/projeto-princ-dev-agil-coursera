const express = require("express");

const routes = express.Router();

const authController = require("./controllers/authController");

routes.get("/", (req, res) => {
   return res.send({ message: "Hello fellas!" });
});

routes.post("/auth/authenticate", authController.logar);

module.exports = routes;
