const express = require("express");

const routes = express.Router();

const authController = require("./controllers/authController");
const livroController = require("./controllers/livroController");
const pessoaController = require("./controllers/pessoaController");
const trofeuController = require("./controllers/trofeuController");
const leituraController = require("./controllers/leituraController");

routes.get("/", (req, res) => {
   return res.send({ message: "Hello fellas!" });
});

// pessoa
routes.post("/auth/authenticate", authController.logar);
routes.post("/auth/signup", authController.cadastrar);
routes.get("/auth/listar", authController.listarPessoas);
routes.get("/user/:id", pessoaController.find);

// livros
routes.get("/livro/index", livroController.findAll);
routes.get("/livro/:id", livroController.findById);

// usuários
routes.get("/usuario/byPoints", pessoaController.indexByPoints);

// trofeus
routes.get("/trofeu/index/byUser/:idUsuario", trofeuController.indexByUser);

//leitura
routes.post("/leitura/marcar", leituraController.marcarLeitura);
routes.get("/leitura/:idUsuario", leituraController.buscarLeituraUsuario);
routes.get(
   "/leitura/totalLeituras/:idLivro",
   leituraController.buscarLeiturasPorLivro
);

//Testes
const Livro = require("./models/Livro");
const Genero = require("./models/Genero");
const Trofeu = require("./models/Trofeu");
routes.get("/test", async (req, res) => {
   // const { } = req.params

   const trofeu = await Trofeu.findAll();
   return res.send(trofeu);
});

module.exports = routes;
