import axios from "axios";

const formatGenres = ({ id, name, movies_count }) => ({
  id: id,
  name: name,
  movies_count: movies_count,
});

export const getGenres = async () => {
  const response = await axios.get(
    "https://moviesapi.codingfront.dev/api/v1/genres"
  );
  const rawGenres = response.data.map(formatGenres);
  return rawGenres;
};

const formatMovies = ({ id, title, poster, imdb_rating }) => ({
  id: id,
  title: title,
  poster: poster,
  imdb_rating: imdb_rating,
});

export const getMovies = async (page = 1) => {
  const response = await axios.get(
    `https://moviesapi.codingfront.dev/api/v1/movies?page=${page}`
  );
  const rawMovies = response.data.data.map(formatMovies);
  return rawMovies;
};

export const filterByGenres = async (genres, page = 1) => {
  if (!genres) return [];

  const response = await axios.get(
    `https://moviesapi.codingfront.dev/api/v1/genres/${genres}/movies?page=${page}`
  );

  return response.data.data.map(formatMovies);
};

const formatMovie = (movie) => {
  const {
    id,
    title,
    poster,
    year,
    country,
    runtime,
    director,
    plot,
    imdb_rating,
    genres,
    images,
    actors,
  } = movie;

  return {
    id: id,
    title: title,
    poster: poster,
    year: year,
    country: country,
    runtime: runtime,
    director: director,
    plot: plot,
    imdb_rating: imdb_rating,
    images: images,
    genres: genres,
    actors: actors,
  };
};

export const getMovieByName = async (id) => {
  if (!id) {
    return;
  }

  const { data } = await axios.get(
    `https://moviesapi.codingfront.dev/api/v1/movies/${id}`
  );

  return formatMovie(data);
};
