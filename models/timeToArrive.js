var orm = require('../config/create.js');

var arrivalTime = {
    all: function(cb){
        orm.all('MySQLTableName', function(res){
            cb(res);
        })
    }
};

module.exports = arrivalTime;