// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var path = require('path');
var favicon = require('serve-favicon');
require('dotenv').config()

var PORT = process.env.PORT || 8080;

var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.use(methodOverride('__method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use("/", routes);

// app.get('/css', function (req, res){
//     res.sendFile(path.join(__dirname, '/public/assets/css/appstyle.css'));
  
//   })

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });