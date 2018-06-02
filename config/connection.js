var mysql = require('mysql');
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
};
connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id: "+connection.threadId);
});
module.exports = connection;