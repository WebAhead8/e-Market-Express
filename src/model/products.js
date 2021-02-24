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

function deletePro(id) {
  return db.query("DELETE FROM products WHERE id = $1", [id]);
}

module.exports = { getAllProducts, getCategory, getProduct, deletePro };
