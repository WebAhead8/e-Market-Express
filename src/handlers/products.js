const productsModel = require("../model/products");
const usersModel = require("../model/users");

function getAllProducts(req, res, next) {
  productsModel
    .getAllProducts()
    .then((allProducts) => {
      res.send(allProducts);
    })
    .catch(next);
}

function getCategory(req, res, next) {
  const cat = req.params.cat;
  productsModel
    .getCategory(cat)
    .then((category) => {
      res.send(category.rows);
    })
    .catch(next);
}

function getProduct(req, res, next) {
  const proName = req.params.name;
  productsModel
    .getProduct(proName)
    .then((name) => {
      res.send(name.rows);
    })
    .catch(next);
}

function del(req, res, next) {
  const proId = req.params.id;
  const user = req.body.email;
  usersModel
    .getUser(user)
    .then((user) => {
      const role = user.rows[0].role;
      console.log(role);
      if (role !== "admin") {
        const error = new Error("You must be admin to delete");
        res.status(401);
        next(error);
      } else {
        productsModel.deletePro(proId).then(() => {
          res.status(204).send();
        });
      }
    })
    .catch(next);
}

module.exports = { getAllProducts, getCategory, getProduct, del };
