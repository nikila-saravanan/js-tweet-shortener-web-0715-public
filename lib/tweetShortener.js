'use strict';

var tweetShortener = {
  wordSubstituter: function(tweet){
    return tweet.replace(/ to | two | too /g,' 2 ').replace(/ and /g,' & ').replace(/for\b/ig,'4').replace(/be\b/g,'b').replace(/ at /g,' @ ').replace(/ you /g,' u ');
  },
  bulkShortener: function(tweets){
      var result = [];
      for(var i = 0; i<tweets.length; i++){
        result.push(this.wordSubstituter(tweets[i]));
      }
      return result;
    },
  selectiveShortener: function(tweet){
    if (tweet.length > 140){
       return this.wordSubstituter(tweet)
    }
    else {
      return tweet
    }
  },
  shortenedTruncator: function(tweet){
    var short_tweet = this.selectiveShortener(tweet);
    if (short_tweet.length > 140) {
      var result = short_tweet.slice(0,137) + "...";
    } else {
      var result = short_tweet;
    }
    return result;
  },
};
