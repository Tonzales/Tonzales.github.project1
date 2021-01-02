import Movie from "./Movie.js";

export default class MovieCollection{
    
    constructor(){
    this.movies = new Movie[10];
    }

    addMovie(movie){
        this.movies.push(movie);
    }

}