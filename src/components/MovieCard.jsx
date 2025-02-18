import { Badge, Rating } from "flowbite-react";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'

export default function MovieCard({ movie }) {
  const { id, title, poster, imdb_rating } = movie;

  return (
    <>
      <Link to={`/Movie/${title}`}>
      <div
        key={id}
        className="w-[310px] bg-gray-950 bg-opacity-35 rounded-3xl px-3 mb-5 flex flex-col hover:shadow-[4px_4px_50px_1px_rgba(0,0,0,0.2)]"
      >
        <Badge className="relative top-10 left-2 w-16 h-8 rounded-[10px] bg-black pl-3 text-yellow-500 font-medium bg-opacity-85">
          <Rating className="inline pr-1">
            <Rating.Star className="inline" />
          </Rating>
          {imdb_rating}
        </Badge>
        <img
          key={id}
          src={poster}
          alt={title}
          className="rounded-3xl h-[406px]"
        />
        <h1 className="text-gray-300 pl-1 pr-16 text-base font-semibold leading-5 py-5 my-auto">
          {title}
        </h1>
      </div>
      </Link>
    </>
  );
}
