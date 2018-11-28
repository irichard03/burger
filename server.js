require('dotenv').config();
const express = require('express');

//server listens for client requets.
const PORT = process.env.PORT || 5000;

const app = express();

//serve static files from public directory
app.use(express.static("public"));

//parse request body as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes from burger controller
const routes = require("./controllers/burgers_controller.js");

//lookup use method of express.
app.use(routes);

app.listen(PORT, function(){
    console.log("Running...");
});