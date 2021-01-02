import Movie from "./Movie.js";
export default class MovieCollection{
    movies =  new Movie[10];

    constructor(){
    this.movies = movies;
    }

    addMovie(movie){
        this.movies.push(movie);
    }

}