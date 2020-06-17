const Leitura = require("../models/Leitura");
const Pessoa = require("../models/Pessoa");
const Livro = require("../models/Livro");
const Trofeu = require("../models/Trofeu");
const calculaPontos = require("../utils/calculaPontos");
const moment = require("moment-timezone");

module.exports = {
   async marcarLeitura(req, res) {
      const { idUsuario, idLivro } = req.body;

      const verificaLeitura = await Leitura.findOne({
         where: {
            idPessoa: idUsuario,
            idLivro,
         },
      });
      if (verificaLeitura) {
         return res.status(400).send({ error: "Leitura já marcada." });
      }

      const horarioLeitura = moment
         .tz("America/Recife")
         .format("YYYY/MM/DD hh:mm");

      const livro = await Livro.findByPk(idLivro, {
         include: {
            association: "genero",
            attributes: ["nome"],
         },
      });

      const genero = livro.dataValues.genero.dataValues.nome;
      const numPaginasLivro = livro.dataValues.numPaginas;
      const usuario = await Pessoa.findByPk(idUsuario);
      const pontuacaoAtual = usuario.dataValues.pontos;

      const idGenero = livro.dataValues.idGenero;
      const { count, rows } = await Leitura.findAndCountAll({
         where: {
            idPessoa: idUsuario,
            idGenero,
         },
      });

      const {
         count: trofeuCount,
         rows: trofeuRows,
      } = await Trofeu.findAndCountAll({
         where: {
            idPessoa: idUsuario,
            idGenero,
         },
      });

      const novoTrofeu = count > 3 && trofeuCount === 0 ? true : false;

      Leitura.create({
         idPessoa: idUsuario,
         idLivro,
         idGenero,
         data: horarioLeitura,
      })
         .then((created) => {
            Pessoa.update(
               {
                  pontos: pontuacaoAtual + calculaPontos(numPaginasLivro),
               },
               {
                  where: {
                     id: idUsuario,
                  },
               }
            )
               .then((success) => {
                  if (novoTrofeu) {
                     console.log("NOVO TROFÉU");
                     async function criaTrofeu() {
                        Trofeu.create({
                           idPessoa: idUsuario,
                           idGenero,
                           titulo: `Leitor de ${genero}`,
                           data: horarioLeitura,
                        })
                           .then((successful) => {
                              console.log(
                                 "TROFEU CRIADO COM SUCESSO:",
                                 successful
                              );
                              return res.status(201).send({
                                 message: `Você adquiriu um troféu do gênero ${genero}!`,
                              });
                           })
                           .catch((errr) => {
                              console.log("Erro ao criar troféu:", errr);
                           });
                     }
                     return criaTrofeu();
                  }
               })
               .catch((err) => {
                  console.log("Houve um erro ao atualizar pontuação:", err);
               });
            return res.status(201).send(created);
         })
         .catch((err) => {
            console.log(err);
            return res
               .status(400)
               .send({ err, message: "Não foi possível marcar a leitura" });
         });
   },

   async buscarLeituraUsuario(req, res) {
      const { idUsuario: idPessoa } = req.params;

      const response = await Leitura.findAll({
         where: {
            idPessoa,
         },
         attributes: ["idLivro"],
      });
      if (response) {
         let ids = [];
         for (elem in response) {
            ids.push(response[elem].dataValues.idLivro);
         }
         return res.send(ids);
      } else {
         return res
            .status(400)
            .send({ error: "Algo deu errado na consulta de leituras." });
      }
   },

   async buscarLeiturasPorLivro(req, res) {
      const { idLivro } = req.params;

      const leituras = await Leitura.findAndCountAll({
         where: {
            idLivro,
         },
      });
      return res.send({ count: leituras.count });
   },
};
