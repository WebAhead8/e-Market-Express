const express = require("express");
const productsHandler = require("./handlers/products.js");

const PORT = process.env.PORT || 4000;

const server = express();

server.get("/products", productsHandler.getAllProducts);

server.get("/category/:cat", productsHandler.getCategory);

server.get("/product/:name", productsHandler.getProduct);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
