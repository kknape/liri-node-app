# liri-node-app

#What Is LIRI?
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

LIRI will search
 - "Spotify" for songs
 - "Bands in Town" for concerts
 - "OMDB" for movies.

 LIRI will return results from Spotify, Bands in Town and OMDB.
 
 #How the App Is Organized
  - The App uses a few different npm packages to process the user iputs
  - NPM Inquirer is used for the user prompts
  - NPM Axios is used to get data from Bands In Town and OMDB api's
  - NPM Node Spotify API is used to get data from Spotify
  - NPM Moment is used to display the date-time stamp in user friendly format
  
  #How to Use the App
   - User selects from LIRI prompts:
     - concert-this
     - spotify-this-song
     - movie-this
     - do-what-it-says
     
     -If user selects concert-this, they are prompted to enter a band they want to see.
       - LIRI provides results for upcoming concerts for the band entered. 
       - Results include: venue name, venue location, date of concert
      
      -If user selects spotify-this-song, they are prompted to enter a song
       - LIRI provides results for up to five results based on the song entered. 
       - Results include: the artist name, song name, preview link and album
       
      -If user selects movie-this, they are prompted to enter a movie
       - LIRI provides results with more information about the movie entered. 
       - Results include: movie title, year released, IMDB rating, Rotten Tomatoes rating (if there is one), country produced in, language, plot, actors
       
       -(Current Release) If user selects do-what-it-says, LIRI provides results for song "I Want it That Way"
       -(Next Release) LIRI runs a random search and provides random result for one of the four responses
       
