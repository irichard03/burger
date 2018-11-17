require('dotenv').config();
const express = require('express');


const PORT = process.env.SERVERPORT;

const app = express();

app.listen(PORT, function(){
    console.log("Running...");
});

