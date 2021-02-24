const usersModel = require("../model/users");

// Alaa

// Mohamad

// Mahmoud
function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  usersModel
    .getUser(email)
    .then((user) => {
      if (password !== user.password) {
        const error = new Error("wrong password");
        error.status(401);
        next(error);
      } else {
        res.status(200).send("LOGGIN successful");
      }
    })
    .catch(next);
}

// Jihad

module.exports = { login };
