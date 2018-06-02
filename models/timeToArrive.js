var orm = require('../config/orm.js');

var arrivalTime = {
    all: function(cb){
        orm.all('MySQLTableName', function(res){
            cb(res);
        })
    }
};

module.exports = timeToArrive;