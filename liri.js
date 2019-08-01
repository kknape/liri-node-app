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
    console.log(spotify);
    //moment
      var moment = require("moment");
        moment().format();
      //axios
      const axios = require("axios");
      //fs to read our text file
      var fs = require("fs");
      //inquirer to get user inputs
      const inquirer = require("inquirer");
      
debugger;


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
        
   //     );
 //   answers.heyLiri
    //  var heyLi = answers.askLiri;
    //  console.log(JSON.stringify(answers, null, ' '));
    
  
//debugger;
  // Performing the appropriate operation based on user's selection
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
          //  console.log(searchConcert);             
/*<<<<<<<<Working Bands in Town call START*>>>>>>>*/
              axios
                .get("https://rest.bandsintown.com/artists/"+ searchConcert + "/events?app_id=codingbootcamp")
                .then(function(response){
                  console.log(response.data);
                  
                var eventResults=(response.data);
               //  console.log(eventResults.process.argv[3]);
                var eventArr = Array.from(eventResults);
                var venueInfo = eventResults.slice(2,3);
                console.log(venueInfo);
               //   console.log(eventArr);
               //   console.log(eventArr[3]);

                //  console.log(response.data.venue.city);
                //  console.log(response.data.venue.datetime);
//name of venue
//venue location
//date of the event (use moment to format as "MM/DD/YYYY")

                }) 
                .catch(function(err) {
                  console.error('Error occurred: ' + err); 
                });
              });
            }   
/*<<<<<<<<working bandsintown call END*>>>>>>>*/        
      
//call song function to get details about a song input by the user, call to spotify api for details
    function song(){
          inquirer.prompt(questionSong).then(answer3=>{
            var searchSong = (answer3.whatSong)
          //  console.log(searchSong);
            spotify.search({ type: 'track', query: searchSong, limit: 10 }, function(err, data) {
              if (err) {
                return console.log('Error occurred: ' + err);
              }
              console.log(data); 
            });
        });      
      }
//call fucntion to get user input of movie, get details of movie from omdb api      
      function movie(){
            inquirer.prompt(questionMovie).then(answer4=>{
            var searchMovie = (answer4.whatMovie)
/*<<<<<<<<working OMDB call START*>>>>>>>*/
                   axios
                    .get("http://www.omdbapi.com/?t=" + searchMovie + "&apikey=trilogy")
                    .then(function(response){
                    console.log(response.data);
                    console.log(response.data.Title);
                    console.log(response.data.Year);
                    console.log(response.data.imdbRating);
                    console.log(response.data.Ratings.Source.Value);
                    })
                    .catch(function(err) {
                      console.error('Error occurred: ' + err); 
                    });
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

    