const express = require('express');
const {PORT} = require('./config/server.config');
const app = express();
const apiRouter = require('./routes/api_router');


app.use('/api', apiRouter); // if any req comes with url starting with /api


app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
});