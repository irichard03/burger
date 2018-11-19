const express = require('express');

const burger = require('../models/burger.js');

const router = express.Router();

router.get("/", function(request,response) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        resizeBy.render("index", hbsObject);
    });
});

module.exports = router;