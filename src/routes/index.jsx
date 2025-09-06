import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import ErrorPage from "../error-page/ErrorPage";
import Movies from "./Movies";
import MoviesByGenres from "./MoviesByGenres";
import MovieDetails, { loader as movieLoader } from "./MovieDetails";
import i18n from "../../i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: "genres/:id",
        element: <MoviesByGenres />,
      },
      {
        path: "Movies/:id",
        element: <MovieDetails />,
        loader: movieLoader,
      },
    ],
  },
]);

export default router;
