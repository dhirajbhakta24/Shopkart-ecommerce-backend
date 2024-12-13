const express = require('express');
const {PORT} = require('./config/server.config');
const app = express();

app.listen(3000,()=>{
    console.log(`server started at port ${PORT}`);
});