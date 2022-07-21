const express = require('express');
const mongoose = require('mongoose');
const { DB } = require('../config/envVars');

mongoose.connect(DB).then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
    console.log('error occured', err);
})