import { getMovieByName } from "../api/movies";
import { useLoaderData } from "react-router-dom";
import { Badge, Rating } from "flowbite-react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

export async function loader({ params }) {
  const movie = await getMovieByName(params.id);
  return movie;
}

export default function MovieDetails() {
  const movie = useLoaderData();

  return (
    <>
      <section>
        <div>
          <img
            src={movie.images}
            alt={movie.title}
            className="rounded-[40px] brightness-75 m-auto backdrop-contrast-75 h-[664px]"
          />
          <div className="bg-slate-800 relative left-40 bottom-14 p-10 pr-44 inline-block backdrop-blur-2xl bg-opacity-20 rounded-2xl">
            <h1 className="text-gray-50 text-3xl font-semibold">
              {movie.title}
            </h1>
          </div>
        </div>
        <div className="flex justify-evenly">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-[470px] rounded-3xl"
          />
          <div className="w-[470px]">
            <h2 className="text-2xl font-medium text-gray-50">
              {movie.director || <Skeleton count={2} width={100} height={20} />}
            </h2>
            <p className="text-gray-400 font-light leading-7 py-6 text-lg">
              {movie.plot}
            </p>
            <Badge className="w-16 h-8 rounded-[10px] bg-black pl-3 text-yellow-500 font-medium bg-opacity-85">
              <Rating className="inline pr-1">
                <Rating.Star className="inline" />
              </Rating>
              {movie.imdb_rating}
            </Badge>
            <ul>
              <li>
                <h3 className="text-gray-500 text-base font-light leading-7 mt-6">
                  year
                </h3>
                <p className="font-light text-lg  text-gray-100">
                  {movie.year}
                </p>
              </li>
              <li>
                <h3 className="text-gray-500 text-base font-light leading-7 mt-6">
                  runtime
                </h3>
                <p className="font-light text-lg  text-gray-100">
                  {movie.runtime}
                </p>
              </li>
              <li>
                <h3 className="text-gray-500 text-base font-light leading-7 mt-6">
                  country
                </h3>
                <p className="font-light text-lg  text-gray-100">
                  {movie.country}
                </p>
              </li>
              <li>
                <h3 className="text-gray-500 text-base font-light leading-7 mt-6">
                  actors
                </h3>
                <p className="font-light text-lg  text-gray-100">
                  {movie.actors}
                </p>
              </li>
              <li>
                <h3 className="text-gray-500 text-base font-light leading-7 mt-6">
                  genres
                </h3>
                <p className="font-light text-lg  text-gray-100">
                  {movie.genres}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
