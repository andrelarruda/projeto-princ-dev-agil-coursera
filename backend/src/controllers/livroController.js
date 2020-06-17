const Livro = require("../models/Livro");

module.exports = {
   async findByGenero(req, res) {
      const { genero } = req.body;

      try {
         Livro.findAll({
            attributes: [
               "id",
               "titulo",
               "autor",
               "editora",
               "ano",
               "edicao",
               "numPaginas",
            ],
            include: {
               association: "genero",
               attributes: ["nome"],
               where: {
                  nome: genero,
               },
            },
         })
            .then((livros) => {
               return res.send(livros);
            })
            .catch((err) => {
               console.log(err);
               return res.status(500).send(err);
            });
      } catch (error) {
         console.log(error);
         return res.status(400).send(error);
      }
   },

   async findAll(req, res) {
      Livro.findAll({
         order: [["titulo", "ASC"]],
         include: {
            association: "genero",
            attributes: ["nome"],
         },
      })
         .then((livros) => {
            return res.send(livros);
         })
         .catch((err) => {
            return res.status(400).send(err);
         });
   },

   async findById(req, res) {
      const { id } = req.params;

      Livro.findByPk(id, {
         include: {
            association: "genero",
            attributes: ["nome"],
         },
      })
         .then((livro) => {
            return res.send(livro);
         })
         .catch((err) => {
            return res.status(400).send(err);
         });
   },
};
