import { Button } from "flowbite-react";
import { useState, useEffect } from "react";
import { getGenres } from "../api/movies";
import { Link, useParams } from "react-router-dom";
import GenSkeleton from "./GenSkeleton";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getGenres()
      .then((genr) => {
        setGenres(genr);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const displayedGenres = showAll ? genres : genres.slice(0, 3);

  return (
    <>
      <Link to={`/`}>
        <Button
          color="dark"
          className={`px-3 m-1 rounded-lg font-semibold ${
            !id
              ? "bg-violet-500 text-gray-900 ring-2 ring-violet-500 hover:text-gray-300"
              : "bg-opacity-0 text-gray-400 hover:bg-gray-950 hover:text-white hover:bg-opacity-40"
          }`}
        >
          All
        </Button>
      </Link>
      {isLoading ? (
        <GenSkeleton genres={3} />
      ) : (
        <>
          {displayedGenres.map((gen) => (
            <Link to={`/genres/${gen.name}`} key={gen.id}>
              <Button
                color="dark"
                className={`px-3 m-1 rounded-lg font-semibold ${
                  id === gen.name
                    ? "bg-violet-500 text-gray-900 ring-2 ring-violet-500 hover:text-gray-300"
                    : "bg-opacity-0 text-gray-400 hover:bg-gray-950 hover:text-white hover:bg-opacity-40"
                }`}
              >
                {gen.name}
              </Button>
            </Link>
          ))}
          {genres.length > 3 && (
            <Button
              color="dark"
              onClick={() => setShowAll(!showAll)}
              className="px-3 m-1 rounded-lg font-semibold bg-opacity-0 text-white hover:bg-gray-950 hover:text-white hover:bg-opacity-40"
            >
              {showAll ? "Less" : "More"}
            </Button>
          )}
        </>
      )}
    </>
  );
}
