import { ButtonGroup } from "flowbite-react";
import Genres from "../components/Genres";
import { useParams } from "react-router-dom";
import { filterByGenres, getGenres } from "../api/movies";
import MovieList from "../components/MovieList";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import InfiniteScroll from "react-infinite-scroll-component";
import CardSkeleton from "../components/CardSkeleton";

export default function MoviesByGenres() {
  const { id } = useParams();

  const [input, setInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState([]);

  useEffect(() => {
    setMovies([]);
    setFilteredMovies([]);
    setPage(1);
    setHasMore(true);
    setIsLoading(true);
    loadMoreMovies(1);
  }, [id]);

  const loadMoreMovies = async (targetPage = page) => {
    try {
      const newMovies = await filterByGenres(id, targetPage);

      if (newMovies.length === 0) {
        setHasMore(false);
        return;
      }

      setMovies((prev) => [...(targetPage === 1 ? [] : prev), ...newMovies]);
      setFilteredMovies((prev) => [
        ...(targetPage === 1 ? [] : prev),
        ...newMovies,
      ]);
      setPage((prev) => targetPage + 1);
    } catch (err) {
      console.error("Error loading movies by genre:", err);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllMoviesByGenre = async () => {
    let all = [];
    let page = 1;
    let keepFetching = true;

    while (keepFetching) {
      const data = await filterByGenres(id, page);
      if (data.length === 0) {
        keepFetching = false;
      } else {
        all = [...all, ...data];
        page += 1;
      }
    }

    return all;
  };

  const handleChange = async (value) => {
    setInput(value);

    if (value.trim() === "") {
      setMovies([]);
      setFilteredMovies([]);
      setPage(1);
      setHasMore(true);
      setIsLoading(true);
      await loadMoreMovies(1);
    } else {
      setIsLoading(true);
      try {
        const allMovies = await fetchAllMoviesByGenre();
        const filtered = allMovies.filter((movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredMovies(filtered);
      } catch (err) {
        console.error("Search failed:", err);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getGenres().then((cons) => setCount(cons));
  }, []);

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

      <div className="flex mb-9 items-center">
        <FaSearch className="text-gray-500 m-2" />
        <input
          type="search"
          placeholder="Search Movies or TV Shows"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          className="bg-slate-950 bg-opacity-25 text-gray-400 border-2 border-gray-700 rounded-xl focus:border-opacity-10 w-72 h-14"
        />
      </div>

      <ButtonGroup className="bg-black bg-opacity-10 p-2.5 rounded-xl flex flex-wrap justify-between px-4 w-fit">
        <Genres />
      </ButtonGroup>

      <h1 className="text-3xl font-semibold text-gray-500 text mt-6 ml-2">
        {id}
        <p className="inline text-lg font-normal">
          &nbsp;(
          {
            count.find((con) => con.name.toLowerCase() === id.toLowerCase())
              ?.movies_count
          }
          )
        </p>
      </h1>

      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={() => loadMoreMovies()}
        hasMore={hasMore && input === ""}
        loader={
          <div className="flex gap-7">
            <CardSkeleton cards={4} />
          </div>
        }
        endMessage={
          <p className="text-gray-600 mt-6 text-center font-light">
            <b>There are no more movies to load...</b>
          </p>
        }
      >
        <MovieList movies={filteredMovies} isLoading={isLoading} />
      </InfiniteScroll>
    </>
  );
}
