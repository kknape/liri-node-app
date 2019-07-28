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
//END REQUIREMENTS


//Requirements
      //dotenv
      require("dotenv").config();
      
      //keys
      var keys = require("./keys.js");
      
  /*    //spotify
     var spotify = new Spotify(keys.spotify);
     
    
     var Spotify = require('spotify-web-api-js');
     var s = new Spotify();
 */
    //moment
      var moment = require("moment");
        moment().format();
      //axios
      const axios = require("axios");
      //fs to read our text file
      var fs = require("fs");
      //inquirer to get user inputs
      var inquirer = require("inquirer");



//User makes a request of Liri

    var askLiri= [
          {
            type: 'list',
            name: 'heyLiri',
            message: 'What can Liri help you with?',
            choices: [
              'concert-this', 
              'spotify-this-song', 
              'movie-this', 
              'do-what-it-says']
          }
        ];
    inquirer.prompt(askLiri).then(function(answers) {
      var heyLiri = answers.askLiri;
      console.log(JSON.stringify(answers, null, ' '));
    

      if  (heyLiri === "concert-this") {
              concert();
                  }
              
      else if (heyLiri === "spotify-this-song")  {
              song();
      }

      else if (heyLiri === "movie-this")  {
              movie();
      }

      else if (heyLiri === "do-what-it-says")  {
              doIt();
      }
    });
 //call concert function to find a local event for a band; uesr input band name, run call to band api
            function concert(){
      /*<<<<<<<<Working Bands in Town call START*>>>>>>>*/
      //reference from instructions.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")}
                axios
                  .get("https://rest.bandsintown.com/artists/Metallica/events?app_id=codingbootcamp")

                .then(function(response){
                  console.log(response);
                }) 
                .catch(function(err) {
                  console.error('Error occurred: ' + err); 
                });
              }        
        /*<<<<<<<<working bandsintown call END*>>>>>>>*/        

//call song function to get details about a song input by the user, call to spotify api for details
            function song(){
                 axios
                  .get('https://api.spotify.com/v1/search?q=roadhouse%20blues')
                  .then(function(data) {
                    console.log(data); 
                    })
                  .catch(function(err) {
                    console.error('Error occurred: ' + err); 
                    });
                };

          function movie(){

//call fucntion to get user input of movie, get details of movie from omdb api
/*<<<<<<<<working OMDB call START*>>>>>>>*/
                    axios
                    .get("http://www.omdbapi.com/?t=Mr.+Nobody&apikey=trilogy")

                    .then(function(response){
                    console.log(response);
                    })
                    .catch(function(err) {
                      console.error('Error occurred: ' + err); 
                    });
                  }
/*<<<<<<<<working OMDB call END*>>>>>>>*/  


//call fucntion  for "do what it says" which reads radom file which has [spotify-this-song,"I Want it That Way" ]
        function doIt(){
/*<<<<<<<<Do it START*>>>>>>>*/
            fs.readFile("random.txt", "utf8", function(error, data) {
              if (error) {
                return console.log(error);
              }
              else console.log(data);
            }); 
            }
/*<<<<<<<<Do it END*>>>>>>>*/

  

    
    /* 1. `node liri.js concert-this <artist/band name here>`
     * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
    * Name of the venue
    * Venue location
    * Date of the Event (use moment to format this as "MM/DD/YYYY") */
    