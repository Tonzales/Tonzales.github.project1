import Movie from Movie.js;
import MovieCollection from MovieCollection.js;


let movie1 = new Movie("Batman","13.2.1999","Action",["Christian Bale","Liam Neeson"],"2h");
let allMovies = new MovieCollection(movie1);
//allMovies.addMovie(movie1);
console.log(allMovies);