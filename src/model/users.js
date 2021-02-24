const db = require("../database/connection.js");

// Alaa

// Mohamad
function deletepro(id) {
  return db.query("DELETE * FROM products WHERE id =$1", [id]);
}
function getUser()

// Mahmoud

// Jihad

////module
module.exports = { deletepro, signUp, login, logout };
