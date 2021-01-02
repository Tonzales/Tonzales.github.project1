import Movie from "./Movie.js";

export default class MovieCollection{    
    
    constructor(){
    this.movies = [];
    }

    addMovie(movie){
        this.movies.push(movie);
    }

}