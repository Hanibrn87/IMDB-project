import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { getGenres } from "../api/movies";
import { Link } from "react-router-dom";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    getGenres().then((genr) => setGenres(genr));
  }, []);
  return (
    <>
      <Link to={`/Movies`}>
        <Button
          color="dark"
          className="px-3 m-1 rounded-lg bg-opacity-0 text-gray-400 focus:bg-violet-500 focus:text-gray-900 focus:ring-violet-500 focus:ring-2 enabled:hover:bg-gray-950 enabled:hover:text-gray-300 enabled:hover:bg-opacity-40 mb-1 font-semibold"
        >
          All
        </Button>
      </Link>
      {genres.map((gen) => (
        <>
          <Link to={`/Movies/${gen.name}`}>
            <Button
              key={gen.id}
              color="dark"
              className="px-3 m-1 rounded-lg bg-opacity-0 text-gray-400 focus:bg-violet-500 focus:text-gray-900 focus:ring-violet-500 focus:ring-2 enabled:hover:bg-gray-950 enabled:hover:text-gray-300 enabled:hover:bg-opacity-40 mb-1 font-semibold"
            >
              {gen.name}
            </Button>
          </Link>
        </>
      ))}
    </>
  );
}
