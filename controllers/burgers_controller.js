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

module.exports = router;