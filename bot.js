/*var TwitterPackage = require('twitter');

var secret = {
  "consumer_key": "4NgfTf5Ko39L5LpBXteMl98FB",
  "consumer_secret": "OuziAN2e4Jv90J0BsFMZpA4sxpUq2Pu9q9t8CWcqb4QU3yXkCV",
  "access_token": "994271545873895424-L0te4JpW8HUPg53XcCAoTaea5tyBOd7",
  "access_token_secret": "0wOxivskIl98RsaFH8qb3ZVRPV7b8kJgNntqyNfDwIriU"

};

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '#MAGA'}, function(stream){

  stream.on('data', function(tweet){

    console.log("We found one");
    console.log(tweet.text);

    });

  stream.on('error', function(error)
  {

    console.log(error);

  });

});
*/

var TwitterPackage = require('twitter');

// importing my secret.json file
//var secret = require("./secret");

// my secret.json file looks like this:
// {
//   "consumer_key": "...",
//   "consumer_secret": "...",
//   "access_token_key": "...",
//   "access_token_secret": "..."
// }

var secret = {
  consumer_key: 'WMNItl7mOCO9k6lv8WNEJ4u3e',
  consumer_secret: '4uo3E5qqWrNe8kehtXZ8aALY7BhjFPqWTiPwiIZKaXGD8rfaes',
  access_token: '994271545873895424-TiDiUSokX8uBRuHS7cNM3NeKBHlbWvs',
  access_token_secret: 'JQVdG5KHyzOnN0nJlIQy9rrPiKcpHHENvMqKhV1gpHuEO'

}

//make a new Twitter object
var Twitter = new TwitterPackage(secret);

// Call the stream function and pass in 'statuses/filter', our filter object, and our callback
Twitter.stream('statuses/filter', {track: '#WeatherReport'}, function(stream) {

  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);

    //build our reply object
    var statusObj = {status: "Hi @" + tweet.user.screen_name + ", How are you?"}

    //call the post function to tweet something
    Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){

      //if we get an error print it out
      if(error){
        console.log(error);
      }

      //print the text of the tweet we sent out
      console.log(tweetReply.text);
    });
  });

  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});
