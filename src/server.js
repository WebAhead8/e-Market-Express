const express = require("express");
const cors = require("cors");
const productsHandler = require("./handlers/products");
const usersHandler = require("./handlers/users");
const handleError = require("./middleware/error");

const PORT = process.env.PORT || 4000;

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

server.get("/products", productsHandler.getAllProducts);
// server.get("/users", usersHandler.getUser);
server.delete("/del/:id", productsHandler.del);

// users
server.post("/login", usersHandler.login);
server.post("/signup", usersHandler.signUp);

server.use(handleError);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
