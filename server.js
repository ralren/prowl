//server.js

//BASE SETUP
//=======================================================================
//http://www.sitepoint.com/using-redis-node-js/

//set up connection to redis
var redis = require('redis');
var client = redis.createClient();

var youtube = require('youtube-api');


// GET functions
//=======================================================================

//Fetch all emails/prowlers
exports.getProwlers = function(cb) {
  client.smembers('prowler', function(err, prowlers) {
    if (err) {
      console.log(err);
    } else {
      cb(null, prowlers);
    }
  });
};

//Fetch all channels for an email/prowler
exports.getChannels = function(email, cb) {
  var key = 'prowler:'.concat(email);
  client.smembers(key, function(err, channels) {
    if (err) {
      console.log(err);
    } else {
      cb(null, channels);
    }
  });
}

//Fetch all keys for an email/prowler
exports.getKeywords = function(email, channel, cb) {
  var key = 'prowler:'.concat(email, ':', channel);
  client.smembers(key, function(err, keywords) {
    if (err) {
      console.log(err);
    } else {
      cb(null, keywords);
    }
  });
}

exports.getChannelID = function(channel, cb) {
  var key = 'channel:'.concat(channel);
  client.get(key, function(err, playlistID) {
    if (err) {
      console.log(err);
    } else {
      cb(null, playlistID);
    }
  })
}

// DELETE FUNCTIONS
//=======================================================================

//delete prowler
//delete channel from prowler:[email]
//delete keywords from prowler:[email]

// POST FUNCTIONS
//=======================================================================

/*exports.addChannel = function(channel, cb) {
  client.sadd(['channel', channel], function(err, reply) {
    if (err) {
      console.log(err);
    } else {
      addChannelID(channel, function())
    }
  })
}*/
//add to channel
//add to prowler
//add channel to prowler:[email]
//add keywords to prowler:[email]
