//My Liri Bot

//Liri can take in these commands:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says

//To answer these commands, retrieve data using the `axios` package from these apis
//[OMDB API](http://www.omdbapi.com)
//[Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)
//Spotify


require("dotenv").config();

 var keys = require("./keys.js");

//spotify
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: 961fbd4aedba447abc284e0f050333ce,
  secret: <your spotify client secret>
});

//moment require
// var NodeGeocoder = require("node-geocoder");

//Make it so liri.js can take in one of the following commands:

// `concert-this`
// `spotify-this-song`
// `movie-this`
// `do-what-it-says`

//create a switch statement to handle the commands that liri can respond to
switch (action) {
    case "concert-this":
            concert(){
                axios
                    .get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")}
            ;
            break;
    
    case "spotify-this-song":
        song();
      break;
    
    case "movie-this":
      movie();
      break;
    
    case "do-what-it-says":
      doIt();
      break;
    }
    
    /* 1. `node liri.js concert-this <artist/band name here>`
     * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
    * Name of the venue
    * Venue location
    * Date of the Event (use moment to format this as "MM/DD/YYYY") */
    function concert();