function createProduct(req,res){
    try {
        //some db processing
        return res.json({
            
            success : true,
            error:{},
            message : "successfully created a product",
            data : {
                id : Math.random() * (20),
                title :      req.body.title,
                description: req.body.description,
                category:    req.body.description,
                price :      req.body.price,
                image :      req.body.image
            }
        });    
    } catch (error) {
        console.log("Something went wrong",error);
    }
}

module.exports={
    createProduct
}