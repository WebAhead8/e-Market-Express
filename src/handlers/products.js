const productsModel = require('../model/products.js');

function getAllProducts(req, res, next) {
	productsModel
		.getAllProducts()
		.then((allProducts) => {
			res.send(allProducts);
		})
		.catch(next);
}

function getCategory(req, res, next) {
	const cat = req.params.category;
	productsModel
		.getCategory(cat)
		.then((category) => {
			res.send(category);
		})
		.catch(next);
}

function getProduct(req, res, next) {
	const proName = req.params.name;
	productsModel
		.getProduct(proName)
		.then((name) => {
			res.send(name);
		})
		.catch(next);
}

module.exports = { getAllProducts, getCategory, getProduct };
