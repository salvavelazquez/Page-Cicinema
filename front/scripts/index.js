const carouselContainer = document.getElementById("carouselContainer");
const estrenosContainer = document.getElementById("estrenosContainer");

const divContainer = document.getElementById("moviesContainer");
let i = 0;


$.get("https://webpt19b.web.app/data/movies.json", (data, status) => {
    renderCards(data);
});

const renderCards = (data) => {

    const moviesHTML = data.map((movie) => {

        const divCarousel = document.createElement("div");
        divCarousel.classList.add("carousel-item");

        divCarousel.innerHTML = `
                <img class="d-block w-100" data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                alt="portada"
                src="${movie.poster}"
                data-holder-rendered="true">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="title-portada">${movie.title}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veniam vitae quo totam corrupti minima delectus saepe perferendis ad a, commodi impedit quisquam molestias maxime vero voluptatum amet esse? Consequuntur!</p>
                    <button class="button-portada">Ver Película</button>
                </div>
        `;


        const newMovie = document.createElement("div");
        newMovie.classList.add("movie");

        newMovie.innerHTML = `
                <a href="#"><h2 class="card-title">${movie.title}</h2></a>
                <div class="letrero">
                    <p>${movie.year}</p>
                    <p>★${movie.rate}</p>
                </div>
                <img class="movie-img" src="${movie.poster}" alt="${movie.title}">
                <p>Director: ${movie.director}</p>
                
                <p>Duration: ${movie.duration}</p>
                <p>Genre: ${movie.genre.join(", ")}.</p>
                
                
            `;


        if (i < 3 && movie.rate > 8.5) {
            estrenosContainer.appendChild(newMovie.cloneNode(true));
            carouselContainer.appendChild(divCarousel.cloneNode(true));
            i++;
        }
        return newMovie;
    });

    moviesHTML.forEach(mov => {
        divContainer.appendChild(mov);
    });
}
