const express = require('express');
const { createProduct } = require('../../controllers/productController');
const { createProductValidator } = require('../../middlewares/product.middleware');

const productRouter = express.Router();



productRouter.post('/', createProductValidator, createProduct); // mapping a route to a controller


module.exports = productRouter;