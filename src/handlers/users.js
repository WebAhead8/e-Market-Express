const usersModel = require("../model/users.js");

// Alaa

// Mohamad

// Mahmoud

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
