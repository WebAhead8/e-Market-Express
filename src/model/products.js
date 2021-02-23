const db = require("../database/connection.js");

function getAllProducts() {
  return db.query("SELECT * FROM products");
}

function getCategory(category) {
  return db.query("SELECT * FROM  products WHERE category = $1", [category]);
}

function getProduct(name) {
  return db.query("SELECT * FROM  products WHERE name = $1", [name]);
}

module.exports = { getAllProducts, getCategory, getProduct };
