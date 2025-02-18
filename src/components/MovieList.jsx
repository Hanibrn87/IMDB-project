import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <>
      <section className="flex flex-wrap justify-between my-7">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </section>
    </>
  );
}
