import MovieCard from "./MovieCard";
import CardSkeleton from "./CardSkeleton";

export default function MovieList({ movies, isLoading }) {
  return (
    <section className="flex flex-wrap justify-start gap-7 my-7">
      {isLoading ? (
        <CardSkeleton cards={8} />
      ) : (
        movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)
      )}
    </section>
  );
}
