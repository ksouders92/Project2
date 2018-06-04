var express = require('express');
var router = express.Router();
var arrivalTime = require('../models/timeToArrive.js');
router.get("/", function (req, res) {
    arrivalTime.all(function(arrivalData) {
        var flight = {
            "flight-response": [
                // need to create function to populate with flight results from API
        
                // add API call to replace flights info
                {
                "geography": { 
                "latitude": 43.5033, 
                "longitude": -79.1297, 
                "altitude": 7833.36, 
                "direction": 70 
                }, 
                "speed": { 
                "horizontal": 833.4, 
                "isGround": 0, 
                "vertical": 0 
                }, 
                "departure": { 
                "iataCode": "YHM", 
                "icaoCode": "CYHM" 
                }, 
                "arrival": { 
                "iataCode": "YQM", 
                "icaoCode": "CYQM" 
                }, 
                "aircraft": { 
                "icaoCode": "B763", 
                "regNumber": "CGYAJ", 
                "icao24": "C08412" 
                }, 
                "airline": { 
                "iataCode": "W8", 
                "icaoCode": "CJT" 
                }, 
                "flight": { 
                "iataNumber": "W8620", 
                "icaoNumber": "CJT620", 
                "number": "620" 
                }, 
                "system": { 
                "updated": 1513148168, 
                "squawk": "0000" 
                }, 
                "status": "en-route"
                }
            ]
        }
        res.render('index', { arrivalData: arrivalData, flightResponse: flight['flight-response']});
    })
});


router.post("/create/favorites", function (req, res) {
    
    });
//export routes
module.exports = router;