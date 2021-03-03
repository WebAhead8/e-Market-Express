const { getMaxListeners } = require("../database/connection");
const productsModel = require("../model/products");
const usersModel = require("../model/users");

function getAllProducts(req, res, next) {
  productsModel
    .getAllProducts()
    .then((allProducts) => {
      res.send(allProducts.rows);
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

module.exports = { getAllProducts, getCategory, getProduct };
