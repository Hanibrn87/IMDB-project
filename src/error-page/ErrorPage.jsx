import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <header className="w-full h-20 bg-gray-900 flex justify-center">
        <div className="center my-auto">
          <img
            className="opacity-100 w-10"
            src="../src/assets/images/logo.png"
            alt="logo"
          />
        </div>
      </header>
      <div>
        <img
          className="m-auto my-14 w-1/4"
          src="../src/assets/images/Film-rolls-rafiki.svg"
          alt="404"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-semibold mb-4">
          Lost your way?
        </h1>
        <p className="text-gray-400 text-lg w-fit text-center">
          Oops! This is awkward. You are looking for something that doesn't
          <br />
          actually exist.
        </p>
      </div>
      <Link to={`/`}>
        <Button
          gradientDuoTone="purpleToBlue"
          className="m-auto my-6 w-32 h-14 p-2.5 text rounded-xl font-light"
        >
          Go Home
        </Button>
      </Link>
    </>
  );
}
