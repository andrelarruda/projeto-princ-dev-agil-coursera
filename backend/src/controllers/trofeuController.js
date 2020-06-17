const Trofeu = require("../models/Trofeu");

module.exports = {
   async indexByUser(req, res) {
      const { idUsuario } = req.params;
      console.log(req.params);
      Trofeu.findAll({
         include: {
            association: "pessoa",
            attributes: [],
            where: {
               id: idUsuario,
            },
         },
      })
         .then((trofeus) => {
            return res.send(trofeus);
         })
         .catch((err) => {
            console.log(err);
            return res.status(400).send(err);
         });
   },
};
