var express = require('express');
var router = express.Router();
var db = require("../models");


 router.get("/airports/search", function (req, res) {

     var type = req.query.type;  
     var airportSearch =req.query.airport_search; 
     db.Airport.findAll({
         where: { [type]: airportSearch}
      }).then(function(airports) {
        console.log(airports)
        res.render("results", {airports});
      });
    
     
    });

   
    

module.exports = router;