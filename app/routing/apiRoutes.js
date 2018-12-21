// require friends data file
const friends = require('../data/friends.js');

//Routes
module.exports = function (app) {

    // API GET Requests
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });
    // API POST Requests
    app.post('/api/friends', function (req, res) {
console.log(req.body.scores);
        // Receive user details (name, photo, scores)
    var user = req.body;

    // parseInt for scores
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    var bestMatchIndex = 0;
    var minimumDifference = 40;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // updating current best friend with new min difference
      if(totalDifference < minimumDifference) {
        bestMatchIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    res.json(friends[bestMatchIndex]);
  });
};