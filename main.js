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
const closeModalButton = document.createElement("button");
closeModalButton.setAttribute("id","closeButton");
closeModalButton.textContent="close movie preview"
closeModalButton.addEventListener("click",closeModalWindow);

let movie1 = new Movie("Batman Begins", "15.6.2005", "Action", ["Christian Bale", "Liam Neeson","Michael Caine"], "2h20min");
movie1.setDescription("After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.");
movie1.addImage("batmanBegins");
let movie2 = new Movie("The Dark Knight", "18.7.2008", "Action", ["Christian Bale", "Heath Ledger"], "2h32min");
movie2.setDescription("When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.");
movie2.addImage("darkKnight");
let movie3 = new Movie("The Dark Knight Rises", "20.7.2012", "Action", ["Christian Bale","Tom Hardy"], "2h44min");
movie3.setDescription("Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City from the brutal guerrilla terrorist Bane.");
movie3.addImage("darkKnightRises");
let movie4 = new Movie("Tenet", "3.9.2020", "Action, Sci-Fi", ["Rober Pattinson","John Washington"], "2h30min");
movie4.setDescription("Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time. ");
movie4.addImage("tenet");
let movie5 = new Movie("Inception", "16.6.2010", "Action, Adventure", ["Leonardo DiCaprio"], "2h28min");
movie5.setDescription("A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.");
movie5.addImage("inception");
let movie6 = new Movie("Gladiator", "5.5.2000", "Action, Drama", ["Russell Crowe","Joaquin Phoenix"], "2h35min");
movie6.setDescription("A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery. ");
movie6.addImage("gladiator");
let movieArray = [movie1, movie2, movie3, movie4, movie5, movie6];
let allMovies = new MovieCollection();
addMoviesToDatabase(movieArray,allMovies);
console.log(allMovies);
listAllMovies(allMovies);

function addMovie() {
    modal.style.display="block";
    let form = document.createElement("form");
    let fields = ["name", "genre","actors","length","release date"];
    for(let i = 0; i < fields.length; i++){
        let label = document.createElement("label");
        let inputField = document.createElement("input")
        inputField.setAttribute("type","text");
        inputField.setAttribute("id",fields[i]);
        label.textContent=fields[i];
        label.setAttribute("for",fields[i]);
        form.appendChild(label);
        form.appendChild(inputField);
    }
    let addBtn = document.createElement("button");
    addBtn.textContent ="Add movie";
    let cancelBtn = document.createElement("button");
    cancelBtn.textContent="Cancel";
    modalContent.appendChild(form);
    modalContent.appendChild(addBtn);
    modalContent.appendChild(cancelBtn);

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

function addMoviesToDatabase(movieArray, database){
    for (let i = 0; i < movieArray.length; i++) {
        database.addMovie(movieArray[i]);
    }
}

//Listes all the movies that are created
function listAllMovies(arrayOfMovies) {
    for (let i = 0; i < arrayOfMovies.movies.length; i++) {
        let movieElement = document.createElement("li");
        movieElement.setAttribute("class", "listItem");
        let img = document.createElement("img");
        if(arrayOfMovies.movies[i].image == null){
            img.src = "./movieCovers/notFound.png"   
        }else{
            img.src=arrayOfMovies.movies[i].image;
        }
        img.style.width = window.screen.width/12+"px";
        img.style.height = window.screen.height/4 +"px";
        //img.style.width="233px"; 
        let paragraph = document.createElement("p");
        paragraph.textContent = arrayOfMovies.movies[i].getName();
        paragraph.setAttribute("style", "color:white;");
        list.appendChild(movieElement);        
        movieElement.appendChild(img);
        movieElement.appendChild(paragraph);
        movieElement.addEventListener("click", function () {
            showInfo(arrayOfMovies.movies[i]);
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
    let modalTextDiv = document.createElement("div");
    modalTextDiv.setAttribute("id","modalTextDiv");
    modalTextDiv.appendChild(header);
    modalTextDiv.appendChild(p);
    modalTextDiv.appendChild(description);
    modalContent.appendChild(modalTextDiv);
    modalContent.appendChild(closeModalButton);    
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
    let filteredMovies = new MovieCollection();
    addMoviesToDatabase(helper,filteredMovies);
    listAllMovies(filteredMovies);
}

