const usersModel = require("../model/users.js");

// Alaa

// Mohamad
function del(req, res, next) {
  const proId = req.params.id;
  const user = req.user.email;
  usersModel
    .getuser(user)
    .then((user) => {
      const role = user.role;
      if (role !== "admin") {
        const error = new Error("You must be admin to delete");
        error.status = 401;
        next(error);
      } else {
        usersModel.getProduct(proId).then((Product) => {
          usersModel.deletePro(proId).then(() => {
            res.status(204).send();
          });
        });
      }
    })
    .catch(next);
}

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
////module

module.exports = { del, signUp, login, logout };
