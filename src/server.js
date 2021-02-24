<<<<<<< HEAD
const express = require('express');
const productsHandler = require('./handlers/products.js');
=======
const express = require("express");
const productsHandler = require("./handlers/products");
const usersHandler = require("./handlers/users");
const handleError = require("./middleware/error");
>>>>>>> 20cac40ab2280e4aa04bf2d5254eb82adfc5217f

const PORT = process.env.PORT || 4000;

const server = express();

<<<<<<< HEAD
// products
server.get('/products', productsHandler.getAllProducts);

server.get('/category/:cat', productsHandler.getCategory);

server.get('/product/:name', productsHandler.getProduct);

// users
=======
server.use(express.json());

server.get("/products", productsHandler.getAllProducts);
server.get("/category/:cat", productsHandler.getCategory);
server.get("/product/:name", productsHandler.getProduct);
server.delete("/del/:id", productsHandler.del);

// users
server.post("/login", usersHandler.login);
server.post("/signup", usersHandler.signUp);

server.use(handleError);
>>>>>>> 20cac40ab2280e4aa04bf2d5254eb82adfc5217f

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
