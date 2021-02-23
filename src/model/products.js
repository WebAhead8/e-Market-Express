const db = require('../database/connection.js');

function getAllProducts() {
	return db.query('SELECT * FROM products');
}

function getCategory(categoryName) {
	return db.query('SELECT * FROM  products WHERE category = categoryName');
}

function getProduct(productName) {
	return db.query('SELECT * FROM  products WHERE name = productName');
}

module.exports = { getAllProducts, getCategory, getProduct };
