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
      
    //spotify
    var Spotify = require('node-spotify-api');  
    var spotify = new Spotify(keys.spotify);
    //moment
      var moment = require("moment");
        moment().format();
      //axios
      const axios = require("axios");
      //fs to read our text file
      var fs = require("fs");
      //inquirer to get user inputs
      const inquirer = require("inquirer");
      
//User makes a request of Liri

var question1 = [
          {
            type: 'list',
            name: 'heyLiri',
            message: 'What can Liri help you with?',
            choices: [
              'concert-this', 
              'spotify-this-song', 
              'movie-this', 
              'do-what-it-says']
          }]

var questionConcert = [
          {
            type: 'input',
            name: 'whatConcert',
            message: 'What band do you want to see?',
            }]

var questionSong =  [
          {
            type: 'input',
            name: 'whatSong',
            message: 'What song do you want to know more about?',
          }]
  
var questionMovie = 
          [{
          type: 'input',
          name: 'whatMovie',
          message: 'What movie do you want to know more about?',
          }]

var questionDoIt = [
          {
            type: 'input',
            name: 'doIt',
            message: 'Ready to do what I say?',
            }       
        ]

        inquirer.prompt(question1).then(answer1 => {
          console.log(answer1.heyLiri)

  // Run function depending on user's selection; 
     if  (answer1.heyLiri === "concert-this") {
            concert();
      } 
           
      else if (answer1.heyLiri === "spotify-this-song")  {
            song();
      }
  
    else if (answer1.heyLiri === "movie-this")  {
            movie();
      }
    
    else if (answer1.heyLiri === "do-what-it-says") {
            doIt();
      }
    });

 //call concert function to find a local event for a band; uesr inputs band name, run call to band api
       function concert(){
          inquirer.prompt(questionConcert).then(answer2=>{
            var searchConcert = (answer2.whatConcert)            
/*<<<<<<<<Working Bands in Town call START*>>>>>>>*/
              axios
                .get("https://rest.bandsintown.com/artists/"+ searchConcert + "/events?app_id=codingbootcamp")
                .then(function(response){
                  for (var i = 0; i < response.data.length; i++) {
                        //name of venue
                        var venName = (JSON.stringify(response.data[i].venue.name));
                          //remove the quotes from the response data
                          var venueNameF = venName.substr(1);
                          var venueNameL = venueNameF.slice(0, -1);
                          console.log("\n" + venueNameL);
                        //venue location
                        var location = (JSON.stringify(response.data[i].venue.city + ", " + response.data[0].venue.country));
                        //remove the quotes from the response data
                        var locF = location.substr(1);
                        var locL = locF.slice(0, -1);
                        console.log(locL);
                        //get the date of the event
                        var date = (JSON.stringify(response.data[i].datetime));
                        //get the day, month, year from the full datetime "2019-10-26T19:30:00"
                        var strDate = date.substring(1, 11);    
                        //convert to MM/DD/YYYY using moment                   
                        var showDate =  moment(strDate).format("MM/DD/YYYY");
                       console.log(showDate);
                  }
                }) 
                .catch(function(err) {
                  console.error('Error occurred: ' + err); 
                });
              })
            };
           
/*<<<<<<<<working bandsintown call END*>>>>>>>*/        
      
//call song function to get details about a song input by the user, call to spotify api for details
    function song(){
          inquirer.prompt(questionSong).then(answer3=>{
            var searchSong = (answer3.whatSong)
              console.log(searchSong);

            spotify.search({ type: 'track', query: searchSong, limit: 5 })
              .then(function(response){ 
              //  console.log(response);
              // console.log(JSON.stringify(data, null, 2)); 
             //     for (var i = 0; i < response.data.length; i++) {
                      //name of Artist(s)
                     console.log(JSON.stringify(response));
                    })
                  
                      //The song's name
              //        console.log(JSON.stringify(response.data[0].name));
                      //A preview link of the song from Spotify
               //       console.log(JSON.stringify(response.data[0].external_urls.spotify));
                      //The album that the song is from
              //        console.log(JSON.stringify(response.data[0].album.name));
     
                      .catch(function(err) {
                        console.log(err);
                        });
                   })
                };
              
              
//call fucntion to get user input of movie, get details of movie from omdb api      
      function movie(){
            inquirer.prompt(questionMovie).then(answer4=>{
            var searchMovie = (answer4.whatMovie)
/*<<<<<<<<working OMDB call START*>>>>>>>*/
                   axios
                    .get("http://www.omdbapi.com/?t=" + searchMovie + "&apikey=trilogy")
                    .then(function(response){
                 //   console.log(response.data);
                    console.log("Movie: " + response.data.Title);
                    console.log("Year released: " + response.data.Year);
                    console.log("IMDB rating: " + response.data.imdbRating);
                    console.log("Rotten Tomatoes score: " + response.data.Ratings[1].Value);
                    })
                    .catch(function(err) {
                      console.error('Error occurred: ' + err); 
                    });
                  });
                }
/*<<<<<<<<Movie END>>>>>>>*/  

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

    