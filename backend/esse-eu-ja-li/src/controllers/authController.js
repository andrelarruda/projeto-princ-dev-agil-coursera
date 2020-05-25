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

      return res.status(200).send({ id: pessoa.id });
   },
};
