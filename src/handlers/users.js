const usersModel = require("../model/users");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");

dotenv.config();
const SECRET = process.env.JWT_SECRET;

// Alaa

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
          const token = jwt.sign(
            { role: user.rows[0].role, email: user.rows[0].emails },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
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
    .then(({ rows }) => {
      const user = rows[0];
      const token = jwt.sign({ user: user.role }, SECRET, { expiresIn: "1h" });
      const response = {
        role: user.role,
        first_name: user.name,
        last_name: user.last_name,
        email: user.email,
        access_token: token,
      };

      res.status(201).send(response);
    })
    .catch(next);
}
function isAdmin(req, res, next) {
  const user = jwt.verify(req.headers.authorization, SECRET);
  if (user.role === "admin") return res.send(true);
  else return res.send(false);
}

////module

module.exports = { signUp, login, isAdmin };
