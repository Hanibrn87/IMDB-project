import { Outlet, Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import { SkeletonTheme } from "react-loading-skeleton";

export default function Root() {
  return (
    <>
      <header className="w-full h-20 bg-gradient-to-l from-gray-900 flex items-center">
        <div className="center m-auto flex flex-row justify-between items-center">
          <Link to={`/Movies`}>
            <img
              className="opacity-100 w-12"
              src="../src/assets/images/logo.png"
              alt="logo"
            />
          </Link>
          <div className="text-gray-500 flex gap-7 text-base font-semibold">
            <Link className="hover:text-gray-300" as={Link} to={"/"}>
              Home
            </Link>
            <Link
              className="hover:text-white text-gray-300"
              as={Link}
              to={"/Movies"}
            >
              Movies
            </Link>
          </div>
        </div>
      </header>
      <main className="flex justify-center">
        <div className="center">
          <SkeletonTheme baseColor="rgb(17 24 39 / var(--tw-bg-opacity, 1))" highlightColor="#1f2937">
            <Outlet />
          </SkeletonTheme>
        </div>
      </main>
      <Footer.Copyright
        href="https://codingfront.dev/"
        by="Coding Front"
        year={2025}
        className="my-6"
      />
    </>
  );
}
