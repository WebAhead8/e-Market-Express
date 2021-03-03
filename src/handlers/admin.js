const productsModel = require("../model/products");

function del(req, res, next) {
  const proName = req.body.name;
  productsModel
    .deletePro(proName)
    .then(() => {
      res.status(204).send("the item was deleted");
    })
    .catch(next);
}

function addItem(req, res, next) {
  const newPro = req.body;
  productsModel
    .addPro(newPro)
    .then(() => {
      res.status(204).send("the item was added");
    })
    .catch(next);
}
module.exports = { del, addItem };
