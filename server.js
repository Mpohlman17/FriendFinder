//set up dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//creates express server and sets up a port
var app = express(); 
var PORT = process.env.PORT || 8080; 

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Static files
app.use(express.static('app/public'));

//Router
require('./app/routing/apiRoutes')(app); 
require('./app/routing/htmlRoutes')(app);

//Listening to the port that was set up
app.listen(PORT, function(){
    console.log("Listening on port: ", PORT);
});