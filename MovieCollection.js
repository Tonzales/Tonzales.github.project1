
class MovieCollection{
    movies =  new Movie[10];

    constructor(movies){
    this.movies = movies;
    }

    addMovie(movie){
        this.movies.push(movie);
    }

}