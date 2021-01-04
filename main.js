import  Movie from "./Movie.js";
import MovieCollection from "./MovieCollection.js";

let container = document.getElementById("container");
let list = document.getElementById("movieList");
const searchInput = document.getElementById("searchBar");
searchInput.addEventListener("input", searchMovie);

let movie1 = new Movie("Batman","13.2.1999","Action",["Christian Bale","Liam Neeson"],"2h");
let movie2 = new Movie("The Dark Knight","13.2.2002","Action",["Christian Bale","Heath Ledger"],"2h");
let movie3 = new Movie("The Dark Knight Rises","13.2.2007","Action",["Christian Bale"],"2h");
let movie4 = new Movie("The Dark Knight Rises","13.2.2007","Action",["Christian Bale"],"2h");
let movie5 = new Movie("The Dark Knight Rises","13.2.2007","Action",["Christian Bale"],"2h");
let movie6 = new Movie("The Dark Knight Rises","13.2.2007","Action",["Christian Bale"],"2h");
let movieArray = [movie1,movie2,movie3,movie4,movie5,movie6];
let allMovies = new MovieCollection();
listAllMovies();

//Listes all the movies that are created
function listAllMovies(){
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
}
//Clears the list of movies
function clearMovieList(){
    console.log("got here");
    let div = document.getElementById("movieList");
    //div.removeChild(div.lastElementChild);
    div.innerHTML="";
    let list = document.createElement("ul");
    list.setAttribute("id","movieList");
    div.appendChild(list);
}


function searchMovie(e){
    clearMovieList();
    console.log(e.target.value);
    let helper = allMovies.movies.filter(movie => movie.getName().includes(e.target.value));
    for(let i = 0 ; i < helper.length; i++){
        let movieElement = document.createElement("li");
        movieElement.setAttribute("class","listItem") 
        let paragraph = document.createElement("p");
        paragraph.textContent=helper[i].getName();
        paragraph.setAttribute("style","color:white;");
        list.appendChild(movieElement);
        movieElement.appendChild(paragraph);   
    }
}

