import Movie from "./Movie.js";
import MovieCollection from "./MovieCollection.js";

let container = document.getElementById("container");
let list = document.getElementById("movieList");
const searchInput = document.getElementById("searchBar");
searchInput.addEventListener("input", searchMovie);
const addMovieButton = document.getElementsByName("addMovieButton")[0];
addMovieButton.addEventListener("click", addMovie);
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const closeModalButton = document.getElementById("closeButton");
closeModalButton.addEventListener("click",closeModalWindow);

let movie1 = new Movie("Batman", "13.2.1999", "Action", ["Christian Bale", "Liam Neeson"], "2h");
movie1.setDescription("awesome movie that started a great trilogy.");
movie1.addImage("batmanBegins");
let movie2 = new Movie("The Dark Knight", "13.2.2002", "Action", ["Christian Bale", "Heath Ledger"], "2h");
let movie3 = new Movie("The Dark Knight Rises", "13.2.2007", "Action", ["Christian Bale"], "2h");
movie3.addImage("darkKnightRises");
let movie4 = new Movie("The Dark Knight Rises", "13.2.2007", "Action", ["Christian Bale"], "2h");
let movie5 = new Movie("The Dark Knight Rises", "13.2.2007", "Action", ["Christian Bale"], "2h");
let movie6 = new Movie("The Dark Knight Rises", "13.2.2007", "Action", ["Christian Bale"], "2h");
let movieArray = [movie1, movie2, movie3, movie4, movie5, movie6];
let allMovies = new MovieCollection();
listAllMovies();

function addMovie() {
 console.log("sup");
}

//listen outside clicks
window.addEventListener("click",clickOutside);
//Finish the clickoutside, it does not remove the inner html also you have to add the btn back :)
function clickOutside(e){
    if(e.target == modal){
        modalContent.innerHTML="";
        modalContent.appendChild(closeModalButton);
        modal.style.display="none";    
    }
}

//Closes the modal
function closeModalWindow(){
        modalContent.innerHTML="";
        modalContent.appendChild(closeModalButton);    
        modal.style.display="none";    
}

//Listes all the movies that are created
function listAllMovies() {
    for (let i = 0; i < movieArray.length; i++) {
        allMovies.addMovie(movieArray[i]);
        let movieElement = document.createElement("li");
        movieElement.setAttribute("class", "listItem")
        let paragraph = document.createElement("p");
        paragraph.textContent = movieArray[i].getName();
        paragraph.setAttribute("style", "color:white;");
        list.appendChild(movieElement);
        movieElement.appendChild(paragraph);
        movieElement.addEventListener("click", function () {
            showInfo(movieArray[i]);
        }, false);
    }
}
//Opens modal with a clicked movies information
function showInfo(movie) {
    modal.style.display="block";
    let img = document.createElement("img");    
    if(movie.image == null){
     img.src = "./movieCovers/notFound.png"   
    }else{
        img.src=movie.image;
    }    
    let header = document.createElement("h3");
    header.textContent=movie.getName();
    let p = document.createElement("p");
    let description = document.createElement("p");
    description.textContent = `${movie.description}`;
    p.textContent = `${movie.length} | ${movie.genre} | ${movie.releaseDate}`;
    modalContent.appendChild(img);
    console.log(img.naturalHeight);
    if(img.naturalHeight>400){
        img.style.height="400px";
    }
    modalContent.appendChild(header);
    modalContent.appendChild(p);
    modalContent.appendChild(description);
    console.log(movie);
    
}

//Clears the list of movies
function clearMovieList() {
    console.log("got here");
    let div = document.getElementById("movieList");
    div.innerHTML = "";
}

//Search for a movie that contains the given search text
function searchMovie(e) {
    clearMovieList();
    console.log(e.target.value);
    let helper = allMovies.movies.filter(movie => {
        let movieName = movie.getName();
        let searchName = e.target.value;
        return String(movieName).toUpperCase().includes(String(searchName.toUpperCase()));
    })
    for (let i = 0; i < helper.length; i++) {
        let movieElement = document.createElement("li");
        movieElement.setAttribute("class", "listItem")
        let paragraph = document.createElement("p");
        paragraph.textContent = helper[i].getName();
        paragraph.setAttribute("style", "color:white;");
        list.appendChild(movieElement);
        movieElement.appendChild(paragraph);
    }
}

