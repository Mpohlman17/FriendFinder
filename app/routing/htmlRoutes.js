//Dependency
var path = require('path');
//route
module.exports = function(app){

//GET request 
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});

	// Default catch-all route that leads to home page
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}