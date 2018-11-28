const express = require('express');

const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(request,response) {
    burger.selectAll(function(data) {
        let burgerList = {
            burgers: data
        };
        console.log(burgerList);
        response.render("index", burgerList);
    });
});

router.post("/api/burgers", function(request,response) {
    burger.create(request.body.burger_name,request.body.devoured, function(result){
    response.json(result);
    });
});

module.exports = router;