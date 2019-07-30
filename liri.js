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
      const inquirer = require("inquirer");
      
debugger;


//User makes a request of Liri

var questions = [
          {
            type: 'list',
            name: 'heyLiri',
            message: 'What can Liri help you with?',
            choices: [
              'concert-this', 
              'spotify-this-song', 
              'movie-this', 
              'do-what-it-says']
          },
          {
            type: 'input',
            name: 'whatConcert',
            message: 'What band do you want to see?',
          },
          {
            type: 'input',
            name: 'whatSong',
            message: 'What song do you want to know more about?',
          },
          {
          type: 'input',
          name: 'whatMovie',
          message: 'What movie do you want to know more about?',
          },
          {
            type: 'input',
            name: 'doIt',
            message: 'Ready to do what I say?',
            },         
        ]

        inquirer.prompt(questions).then(answers => {
      //    console.log(answers.heyLiri)
    //    }
   //     );
 //   answers.heyLiri
    //  var heyLi = answers.askLiri;
    //  console.log(JSON.stringify(answers, null, ' '));
    
  
//debugger;
  // Performing the appropriate operation based on user's selection
     if  (answers.heyLiri === "concert-this") {
       //   console.log("Who do you want to see?")
          inquirer.prompt(questions.whatConcert).then(answers=>{
            var searchConcert = (answers.whatConcert)
            console.log(searchConcert);
          });
    }
  });
       //   concert();
              //    }
                  
  /*    else if (answers.heyLiri === "spotify-this-song")  {
        console.log("What song do you want to know more about?")   
    //          song();
      }
 
     else if (answers.heyLiri === "movie-this")  {
        console.log("What movie do you want to see?")      
    //    movie();
     }
  */
  /*   else if (answers.heyLiri === "do-what-it-says")  {
        console.log("Do what I say.")
     //  doIt();
      }
    });  */
 //     return result;
//debugger;
 //call concert function to find a local event for a band; uesr input band name, run call to band api
   //        function concert(){
      /*<<<<<<<<Working Bands in Town call START*>>>>>>>*/
      //reference from instructions.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")}
 /*               axios
                  .get("https://rest.bandsintown.com/artists/Metallica/events?app_id=codingbootcamp")

                .then(function(response){
                  console.log(response);
                }) 
                .catch(function(err) {
                  console.error('Error occurred: ' + err); 
                });
              }        */
        /*<<<<<<<<working bandsintown call END*>>>>>>>*/        

//call song function to get details about a song input by the user, call to spotify api for details
   /*         function song(){
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
*/
//call fucntion to get user input of movie, get details of movie from omdb api
/*<<<<<<<<working OMDB call START*>>>>>>>*/
 /*                   axios
                    .get("http://www.omdbapi.com/?t=Mr.+Nobody&apikey=trilogy")

                    .then(function(response){
                    console.log(response);
                    })
                    .catch(function(err) {
                      console.error('Error occurred: ' + err); 
                    });
                  } */
/*<<<<<<<<working OMDB call END*>>>>>>>*/  


//call fucntion  for "do what it says" which reads radom file which has [spotify-this-song,"I Want it That Way" ]
 /*       function doIt(){
/*<<<<<<<<Do it START*>>>>>>>*/
 /*           fs.readFile("random.txt", "utf8", function(error, data) {
              if (error) {
                return console.log(error);
              }
              else console.log(data);
            }); 
            } */
/*<<<<<<<<Do it END*>>>>>>>*/
  

    
    /* 1. `node liri.js concert-this <artist/band name here>`
     * This will search the Bands in Town Artist Events API (`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:
    * Name of the venue
    * Venue location
    * Date of the Event (use moment to format this as "MM/DD/YYYY") */
    