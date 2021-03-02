const db = require("../database/connection.js");

function getAllProducts() {
  return db.query("SELECT * FROM products");
}

// function getCategory(category) {
//   return db.query("SELECT * FROM  products WHERE category = $1", [category]);
// }

// function getProduct(name) {
//   return db.query("SELECT * FROM  products WHERE name = $1", [name]);
// }

function deletePro(id) {
  return db.query("DELETE FROM products WHERE id = $1", [id]);
}
function addPro(newItem) {
  return db.query(
    "INSERT INTO products (name, description, price, image,category) VALUES ($1,$2,$3,$4,$5)  RETURNING(name, description, price, image,category)",
    [
      newItem.name,
      newItem.description,
      newItem.price,
      newItem.image,
      newItem.category,
    ]
  );
}

module.exports = { getAllProducts, deletePro, addPro };
