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

router.put("/api/burgers/:id", function(request,response) {
    let burgerId = parseInt(request.params.id);
    burger.update(burgerId,function(result){
        if(result.affecteRows == 0) {
            return response.status(404).end();
        }
        else{
                response.status(200).end();
            }
    });
});

module.exports = router;