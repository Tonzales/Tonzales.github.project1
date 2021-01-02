import Movie from Movie.js;
import MovieCollection from MovieCollection.js;


let movie1 = new Movie("Batman","13.2.1999","Action",["Christian Bale","Liam Neeson"],"2h");
let movie2 = new Movie("The Dark Knight","13.2.2002","Action",["Christian Bale","Heath Ledger"],"2h");
let movie3 = new Movie("The Dark Knight Rises","13.2.2007","Action",["Christian Bale"],"2h");
let movieArray = [movie1,movie2,movie3];
let allMovies = new MovieCollection();
for(movie in movieArray){
    allMovies.addMovie(movie);
}

//allMovies.addMovie(movie1);
console.log(allMovies);