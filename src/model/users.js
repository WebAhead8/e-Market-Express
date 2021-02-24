const db = require("../database/connection.js");

// Alaa

// Mohamad
function deletepro(id) {
  return db.query("DELETE * FROM products WHERE id =$1", [id]);
}

// Mahmoud
function getUser(email) {
  const user = db.query("SELECT * FROM users WHERE email = $1", [email]);
  if (!user.lenght) throw new Error(`No user with email '${email}' found`);
  return user;
}
// Jihad

function signUp(newUser) {
  return db.query(
    "INSERT INTO users (email, first_name, last_name, password, role) VALUES ($1,$2,$3,$4,$5)  RETURNING(email, first_name, role)",
    [
      newUser.email,
      newUser.first_name,
      newUser.last_name,
      newUser.password,
      "client",
    ]
  );
}
////module
module.exports = { deletepro, signUp, getUser, logout };
