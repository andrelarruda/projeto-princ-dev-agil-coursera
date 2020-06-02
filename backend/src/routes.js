const express = require("express");

const routes = express.Router();

const authController = require("./controllers/authController");

routes.get("/", (req, res) => {
   return res.send({ message: "Hello fellas!" });
});

routes.post("/auth/authenticate", authController.logar);
routes.post("/auth/signup", authController.cadastrar);
routes.get("/auth/listar", authController.listarPessoas);

module.exports = routes;
