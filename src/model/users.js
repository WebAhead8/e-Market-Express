const db = require("../database/connection.js");

// Alaa

// Mohamad

// Mahmoud
function getUser(email) {
  const user = db.query("SELECT * FROM users WHERE email = $1", [email]);
  if (!user.lenght) throw new Error(`No user with email '${email}' found`);
  return user;
}
// Jihad

module.exports = { getUser };
