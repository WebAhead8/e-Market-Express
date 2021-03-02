const usersModel = require("../model/users");
const jwt = require("jsonwebtoken");

const SECRET = "";

// Alaa

// Mohamad

// Mahmoud
function login(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  usersModel
    .getUser(email)
    .then((user) => {
      if (!user.rows.length) {
        const error = new Error("wrong email");
        res.status(401);
        next(error);
      } else {
        if (password !== user.rows[0].password) {
          const error = new Error("wrong password");
          res.status(401);
          next(error);
        } else {
          const token = jwt.sign({ user: user.id }, SECRET, {
            expiresIn: "1h",
          });
          res.status(200).send({ access_token: token });
        }
      }
    })
    .catch(next);
}

// Jihad

function signUp(req, res, next) {
  const newUser = req.body;

  usersModel
    .signUp(newUser)
    .then((user) => {
      const token = jwt.sign({ user: user.id }, SECRET, { expiresIn: "1h" });
      const responst = {
        id: user.rows.id,
        name: user.rows.name,
        email: user.rows.email,
        access_token: token,
      };

      res.status(201).send(response);
    })
    .catch(next);
}
////module

module.exports = { signUp, login };
