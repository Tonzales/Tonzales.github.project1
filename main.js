"use strict";

class Movie {
    constructor(name,releaseDate,genre,actors,length){
        this.name=name;
        this.releaseDate =releaseDate;
        this.genre = genre;
        this.actors = actors;
        this.length = length;
    }
    getName(){
        return this.name;
    }
}

class MovieCollection{

    constructor(movies){
    this.movies = movies;
    }

    addMovie(movie){
        this.movies.push(movie);
    }

}

let movie1 = new Movie("Batman","13.2.1999","Action",["Christian Bale","Liam Neeson"],"2h");
let allMovies = new MovieCollection(movies1);
//allMovies.addMovie(movie1);
console.log(allMovies);