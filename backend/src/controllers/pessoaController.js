const Pessoa = require("../models/Pessoa");
module.exports = {
   async indexByPoints(req, res) {
      Pessoa.findAll({
         limit: 10,
         order: [
            ["pontos", "DESC"],
            ["nome", "ASC"],
         ],
      })
         .then((usuarios) => {
            return res.send(usuarios);
         })
         .catch((err) => {
            console.log(err);
            return res.status(400).send(err);
         });
   },

   async find(req, res) {
      const { id } = req.params;
      console.log(id);

      const pessoa = await Pessoa.findByPk(id);
      if (!pessoa) {
         return res.status(400).send({ message: "Usuário não encontrado." });
      }
      return res.send(pessoa);
   },
};
