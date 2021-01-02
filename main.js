import  Movie from "./Movie.js";
import MovieCollection from "./MovieCollection.js";

let container = document.getElementById("container");
let list = document.getElementById("movieList");

let movie1 = new Movie("Batman","13.2.1999","Action",["Christian Bale","Liam Neeson"],"2h");
let movie2 = new Movie("The Dark Knight","13.2.2002","Action",["Christian Bale","Heath Ledger"],"2h");
let movie3 = new Movie("The Dark Knight Rises","13.2.2007","Action",["Christian Bale"],"2h");
let movieArray = [movie1,movie2,movie3];
let allMovies = new MovieCollection();
for(let i = 0; i < movieArray.length; i++){
    allMovies.addMovie(movieArray[i]);
    let movieElement = document.createElement("li");
    movieElement.setAttribute("class","listItem") 
    let paragraph = document.createElement("p");
    paragraph.textContent=movieArray[i].getName();
    paragraph.setAttribute("style","color:white;");
    list.appendChild(movieElement);
    movieElement.appendChild(paragraph);

}




