var orm = require('../config/create.js');

var arrivalTime = {
    all: function(condition, cb){
        
        orm.all('airport', condition, function(res){
            cb(res);
        })
    }
};

module.exports = arrivalTime;