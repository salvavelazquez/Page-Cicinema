// class Movie {
//     constructor(title,year, director, duration, genre, rate, poster){
//         this.title = title;
//         this.year = year;
//         this.director = director;
//         this.duration = duration;
//         this.genre = genre;
//         this.rate = rate;
//         this.poster = poster;
//     }
// }

// class Repository{
//     constructor() {
//         this.movies = [];
//     }

//     createMovie({title,year, director, duration, genre, rate, poster}) {
//         const newMovie = new Movie(title,year, director, duration, genre, rate, poster)
//         this.movies.push(newMovie);
//     }

//     getMovie(){

//     }
// }

//const repository = new Repository();
const divContainer2 = document.getElementById("moviesContainer2");

$.get("https://webpt19b.web.app/data/movies.json",(data, status) => {
    renderCards(data);
    //repository.createMovie(data);
});

const renderCards = (data) => {
    const movies = data.map((movie) => {
        const movieDiv1 = document.createElement("div");
        movieDiv1.classList.add("movieDiv1");
        movieDiv1.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <div class="movieDiv2">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movieDiv3">
                    <h2>${movie.title}</h2>
                    <p>Director: ${movie.director}</p>
                    <p>Genre: ${movie.genre.join(", ")}</p>
                    <p>Duration: ${movie.duration}</p>
                    <p>Year: ${movie.year}</p>
                    <p>Rate: ${movie.rate}</p>
                </div>
            </div>
        `;
        return movieDiv1;
    });

    movies.forEach(function(card){
        divContainer2.appendChild(card);
    });
}



