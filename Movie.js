export default class Movie {
    constructor(name,releaseDate,genre,actors,length){
        this.name=name;
        this.releaseDate =releaseDate;
        this.genre = genre;
        this.actors = actors;
        this.length = length;
        this.description = "";
    }
    getName(){
        return this.name;
    }
    setDescription(text){
        this.description=text;
    }
}