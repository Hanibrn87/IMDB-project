import { ButtonGroup } from "flowbite-react";
import Genres from "../components/genres";
import { useLoaderData, useParams } from "react-router-dom";
import { filterByGenres } from "../api/movies";
import MovieList from "../components/MovieList";

export async function loader({ params }) {
  const movies = await filterByGenres(params.id);
  return { movies };
}

export default function MoviesByGenres() {
  const { movies } = useLoaderData();
  return (
    <>
      <div className="text-white mt-20 mb-10">
        <h1 className="font-bold text-8xl">
          IMDb
          <span className="text-xl font-normal pl-1">
            Top <span className="text-violet-400">250</span> Movies
          </span>
        </h1>
        <p className="text-base text-gray-400 mt-5 font-light">
          <span className="text-violet-400">IMDb</span> is the world's most
          popular and authoritative source for <br />
          movie, TV and celebrity content. Find ratings and details <br /> of
          the movie and TV shows!
        </p>
      </div>
      <button className="flex mb-9">
        <img className="m-3" src="src/assets/images/search-normal.png" alt="" />
        <input
          label
          type="search"
          placeholder="Search Movies or TV Shows"
          className="bg-slate-950 bg-opacity-25 text-gray-400 border-2 border-gray-700 rounded-xl focus:border-2 focus:border-opacity-10 w-72 h-14"
        />
      </button>
      <ButtonGroup className="bg-black bg-opacity-10 p-2.5 rounded-xl flex flex-wrap justify-between m-auto px-4">
        <Genres />
      </ButtonGroup>
      {/* <h1>{id}</h1> */}
      <MovieList movies={movies} />
    </>
  );
}
