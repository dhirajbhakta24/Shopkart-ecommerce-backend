const {StatusCodes , ReasonPhrases} = require('http-status-codes');

const productService = require('../services/product.service');


function createProduct(req,res){
    try {
        
        const response = productService.createProduct(req.body);

        return res
        
        .status(StatusCodes.CREATED)
        .json({
            success : true,
            error:{},
            message : "successfully created a product",
            data : response
                
            
        });    
    } catch (error) {
        console.log("Something went wrong",error);
    }
}
function getProducts(req,res){
    try {
        
        const response = productService.getProducts(req.body);

        return res
        
        .status(StatusCodes.OK)
        .json({
            success : true,
            error:{},
            message : "successfully fetched the products",
            data : response
                
            
        });    
    } catch (error) {
        console.log("Something went wrong",error);
    }
}
function getProduct(req,res){
    try {
        
        const response = productService.getProduct(req.body);

        return res
        
        .status(StatusCodes.OK)
        .json({
            success : true,
            error:{},
            message : "successfully fetched a product",
            data : response
                
            
        });    
    } catch (error) {
        console.log("Something went wrong",error);
    }
}

module.exports={
    createProduct,
    getProducts,
    getProduct
}