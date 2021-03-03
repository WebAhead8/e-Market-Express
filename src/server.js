const express = require("express");
const cors = require("cors");
const productsHandler = require("./handlers/products");
const usersHandler = require("./handlers/users");
const admainHandler = require("./handlers/admin");
const handleError = require("./middleware/error");

const PORT = process.env.PORT || 4000;

const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded());

server.get("/products", productsHandler.getAllProducts);
// server.get("/category/:cat", productsHandler.getCategory);
// server.get("/product/:name", productsHandler.getProduct);
// server.delete("/del/:id", productsHandler.del);

//products
server.get("/products", productsHandler.getAllProducts);
server.get("/category/:cat", productsHandler.getCategory);
server.get("/product/:name", productsHandler.getProduct);

//Admin user
server.delete("/del", admainHandler.del);
server.post("/addItem", admainHandler.addItem);

// users
server.post("/login", usersHandler.login);
server.post("/signup", usersHandler.signUp);

server.get("/checkAmin", usersHandler.isAdmin);

server.use(handleError);

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
