//PELICULAS
let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const form = document.getElementById("form");
const search = document.getElementById("search");
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7e9b002d56c2e68a91db5e7ed8bdd811&page=${pagina}`;
const API_URLP = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7e9b002d56c2e68a91db5e7ed8bdd811&page=`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=7e9b002d56c2e68a91db5e7ed8bdd811&query="';

btnSiguiente.addEventListener("click", () => {
  if (pagina < 1000) {
    pagina += 1;
    getMovies(API_URLP + pagina);
  }
});

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    pagina -= 1;
    getMovies(API_URLP + pagina);
  }
});

document.getElementById("btnSiguiente").addEventListener("click", function () {
  document.getElementById("API").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("btnAnterior").addEventListener("click", function () {
  document.getElementById("API").scrollIntoView({ behavior: "smooth" });
});

getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  let peliculas = "";

  movies.forEach((movie) => {
    const { title, poster_path } = movie;
    peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${poster_path}">
						<h3 class="titulo">${title}</h3>
					</div>					
				`;
  });
  document.getElementById("contenedor").innerHTML = peliculas;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_API + searchTerm);

    search.value = "";
  } else {
    window.location.reload();
  }
});

/* Fin Peliculas -----------------------------------------------------------------------------------------*/

//PLATZI
/* const obtenerProductos = async () => {
  try {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/products");

    const datos = await respuesta.json();
    console.log(datos);

    let peliculas = "";

    datos.forEach((pelicula) => {
      peliculas += `
        <div class="pelicula">
          <img class="poster" src=${pelicula.images[0]}>
          <h3 class="titulo">${pelicula.title}</h3>
          <p class="">${pelicula.description}</p>
        </div>
        
      `;
    });

    document.getElementById("contenedor").innerHTML = peliculas;
  } catch (error) {}
};
obtenerProductos(); */
/* Fin Platzi -----------------------------------------------------------------------------------------*/

//MARVEL
/* const obtenerMarvel = async () => {
  const URL = "http://gateway.marvel.com/v1/public/characters?";
  const ts = "1";
  const apikey = "219e26f3d48fcdaf13eb7d35872363dc";
  const hash = "49a2a8444999b1a00aa9877858bdc400";


  try {
    const respuesta = await fetch(
      `${URL}ts=${ts}&apikey=${apikey}&hash=${hash}`
    );
    const datos = await respuesta.json();
    console.log(datos);

    let comics = "";

    datos.data.results.forEach((comic) => {
      comics += `
        <div class="pelicula">
          <img class="poster" src=${comic.thumbnail.path}.${comic.thumbnail.extension}>
          <h3 class="titulo">${comic.name}</h3>
   
        </div>
        
      `;
    });

    document.getElementById("contenedor").innerHTML = comics;
  } catch (error) {
    console.log(error);
  }
};

obtenerMarvel(); */
/* Fin Marvel -----------------------------------------------------------------------------------------*/

//POKEMON
/* let limit = 50;
let offset = 1;

function getPokemon(id) {
  let pokemon = "";

  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      let pokemonsphoto = datos.sprites.front_default;
      let pokemonsname = datos.name;

      pokemon += `
        <div class="pelicula" >
          <img class="poster" id=${pokemonsname} src=${pokemonsphoto}>
          <h3 class="titulo">${pokemonsname}</h3>
        </div>
        `;
      document.getElementById("contenedor").innerHTML += pokemon;
    })

    .catch((error) => console.log(error));
}

function fetchPokemons(offset, limit) {
  for (let i = offset; i <= limit; i++) {
    getPokemon(i);
  }
}

fetchPokemons(offset, limit); */

/* Fin Pokemon -----------------------------------------------------------------------------------------*/

//BOTON UP
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp() {
  const currentScroll = document.documentElement.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
  }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 500) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};

//BOTON DARK THEME
const btnSwitch = document.querySelector("#switch");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");

  //guardar modo

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark-mode", "true");
  } else {
    localStorage.setItem("dark-mode", "false");
  }
});

//optener modo al actualizar

if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark");
  btnSwitch.classList.add("active");
} else {
  document.body.classList.remove("dark");
}
