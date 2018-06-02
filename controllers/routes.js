var express = require('express');
var router = express.Router();
var arrivalTime = require('../models/timeToArrive.js');



router.get("/", function (req, res) {
    arrivalTime.all(function () {
        res.render();
    })
});



router.post("/create/favorites", function (req, res) {
    
    });






//export routes
module.exports = router;