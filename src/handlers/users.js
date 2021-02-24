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

////module

module.exports = { del, signUp, login, logout };
