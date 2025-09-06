import { Outlet, Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import { SkeletonTheme } from "react-loading-skeleton";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function Root() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ir" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <>
      <header className="w-full h-20 bg-gradient-to-l from-gray-900 flex items-center">
        <div className="center m-auto flex flex-row justify-between items-center w-full px-6">
          <Link to={`/`}>
            <img
              className="opacity-100 w-12"
              src="../src/assets/images/logo.png"
              alt="logo"
            />
          </Link>
          <div className="text-gray-500 flex gap-7 text-base font-semibold">
            <button
              onClick={toggleLanguage}
              className="hover:text-white text-gray-400"
            >
              {i18n.language === "en" ? "Persian" : "English"}
            </button>
          </div>
        </div>
      </header>

      <main className="flex justify-center">
        <div className="center">
          <SkeletonTheme
            baseColor="rgb(17 24 39 / var(--tw-bg-opacity, 1))"
            highlightColor="#1f2937"
          >
            <Outlet context={{ lang }} />
          </SkeletonTheme>
        </div>
      </main>

      <Footer.Copyright
        href="https://github.com/Hanibrn87"
        by="Hanieh borna"
        year={2025}
        className="my-6"
      />
    </>
  );
}
