const Pessoa = require("../models/Pessoa");

module.exports = {
   async logar(req, res) {
      const { email, senha } = req.body;

      const pessoa = await Pessoa.findOne({
         where: {
            email,
            senha,
         },
      });

      if (!pessoa) {
         return res.status(400).send({ error: "Usuário não encontrado" });
      }

      return res.status(200).send(pessoa);
   },

   async cadastrar(req, res) {
      const { nome, email, senha } = req.body;

      const search = await Pessoa.findOne({
         email,
      });
      if (search) {
         return res.status(400).send({ error: "Usuário já cadastrado." });
      }

      Pessoa.create({
         nome,
         email,
         senha,
      })
         .then((success) => {
            console.log(success);
            return res
               .status(200)
               .send({ successfullMessage: "Usuário cadastrado com sucesso." });
         })
         .catch((err) => {
            console.log(err);
            return res.status(400).send(err);
         });
   },

   async listarPessoas(req, res) {
      const pessoas = await Pessoa.findAll();
      return res.send(pessoas);
   },
};
