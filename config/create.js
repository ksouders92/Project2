var connection = require('./connection.js');

var orm = {
    all: function (tableInput, condition, cb) {
        connection.query('SELECT * FROM `airport` WHERE `airport_name` = ? ' , , function (
            err, result) {
            if (err) throw err;
            cb(result)
        })

    }
};

module.exports = orm;
