const express = require('express');
const { createProduct , getProducts , getProduct } = require('../../controllers/productController');
const { createProductValidator } = require('../../middlewares/product.middleware');

const productRouter = express.Router();



productRouter.post('/', createProductValidator, createProduct); // mapping a route to a controller
productRouter.get('/',getProducts);
productRouter.get('/:id',getProduct);

module.exports = productRouter;