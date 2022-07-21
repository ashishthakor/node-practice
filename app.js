const express = require('express');
const { port } = require('./src/config/envVars');
require('./src/db/database');

const app = express();

app.listen(port, ()=>{
    console.log('app listening on port : ', port);
})
