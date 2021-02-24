const express = require("express");
const productsHandler = require("./handlers/products.js");
const usershandler = require("./handlers/users");
const handleError = require("./middleware/error");

const PORT = process.env.PORT || 4000;

const server = express();

server.use(express.json());

server.get("/products", productsHandler.getAllProducts);
server.get("/category/:cat", productsHandler.getCategory);
server.get("/product/:name", productsHandler.getProduct);

// users
server.post("/login", usershandler.login);

server.use(handleError);
server.post("/signup", usersHandler.signUp);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
