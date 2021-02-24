const express = require("express");
const productsHandler = require("./handlers/products.js");
const usersHandler = require("./handlers/users.js");

const PORT = process.env.PORT || 4000;

const server = express();

server.use(express.json());

server.get("/products", productsHandler.getAllProducts);

server.get("/category/:cat", productsHandler.getCategory);

server.get("/product/:name", productsHandler.getProduct);

server.post("/signup", usersHandler.signUp);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
