// require friends data file
var friends = require('../data/friends');

//Routes
module.exports = function (app) {

  // API GET Requests
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });
  // API POST Requests
  app.post('/api/friends', function (req, res) {

    var newUserScore = req.body.scores;
    var scoresArray = [];
    var bestMatch = 0;
    // loop through current friends in array then compaire their scores to newUser score
    for (var i = 0; i < friends.length; i++) {
      var scoreDifference = 0;
      for (var j = 0; j < newUserScore.length; j++) {
        scoreDifference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newUserScore[j])));
      }
      // push the score difference into the scoresArray
      scoresArray.push(scoreDifference);
    }
    // loop to find best match
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }
    // return the bestMatch data
    var bestFriends = friends[bestMatch];
    res.json(bestFriends);

    // push newUser data into array
    friends.push(req.body);
  });
};
