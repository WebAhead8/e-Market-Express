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
      if (password !== user.rows[0].password) {
        const error = new Error("wrong password");
        res.status(401);
        next(error);
      } else {
        res.status(200).send("LOGGIN successful");
      }
    })
    .catch(next);
}

// Jihad

function signUp(req, res, next) {
  const newUser = req.body;
  console.log(req.body);
  usersModel
    .signUp(newUser)
    .then((user) => {
      console.log(user);
      const response = user.rows[0].row;

      res.status(201).send(response);
    })
    .catch(next);
}
////module

module.exports = { signUp, login };
