const express = require('express');

const productRouter = express.Router();

productRouter.get('/', (req,res)=>{
    return res.json({products :[]});
});

productRouter.post('/',(req,res)=>{
    return res.json({products : []});
});

module.exports = productRouter;