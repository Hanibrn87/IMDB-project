import { Outlet, Link } from "react-router-dom";
import { Footer } from "flowbite-react";

export default function Root() {
  return (
    <>
      <header className="w-full h-20 bg-gradient-to-l from-gray-900 flex items-center">
        <div className="center m-auto flex flex-row justify-between items-center">
          <img
            className="opacity-100 w-12"
            src="../src/assets/images/logo.png"
            alt="logo"
          />
          <div className="text-gray-400 flex gap-7 text-base font-semibold">
            <Link as={Link} to={"/"}>
              Home
            </Link>
            <Link as={Link} to={"/Movies"}>
              Movies
            </Link>
          </div>
        </div>
      </header>
      <main className="flex justify-center">
        <div className="center">
          <Outlet />
        </div>
      </main>
      <Footer.Copyright href="https://codingfront.dev/" by="Coding Front" year={2025} className="my-6" />
    </>
  );
}
