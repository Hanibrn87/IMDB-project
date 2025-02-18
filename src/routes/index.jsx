import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-page/ErrorPage";
import Movies from "./Movies";
import MoviesByGenres, {
  loader as MoviesByGenresloader,
} from "./MoviesByGenres";
import MovieDetails, { loader as movieLoader } from "./MovieDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Movies",
        element: <Movies />,
      },
      // {
      //   path: "Movies/All",
      //   element : <AllMovies />
      // },
      {
        path: "Movies/:id",
        element: <MoviesByGenres />,
        loader: MoviesByGenresloader,
      },
      {
        path: "Movie/:id",
        element: <MovieDetails />,
        loader: movieLoader,
      },
    ],
  },
]);

export default router;
