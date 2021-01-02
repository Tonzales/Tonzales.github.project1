import Movie from "./Movie.js";

export default class MovieCollection{
    maxCount = 5;
    movies =  new Movie[this.maxCount];

    constructor(){
    this.movies = movies;
    }

    addMovie(movie){
        this.movies.push(movie);
    }

}