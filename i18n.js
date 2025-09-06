import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "IMDb": "IMDB",
      "Top": "Top",
      "Movies": "Movies",
      "is the": "is the world's most popular and authoritative source for",
      "tv and": "movie, TV and celebrity content. Find ratings and details",
      "of the": "of the movie and TV shows!",
      "search": "Search Movies or TV Shows",
      "all": "All",
    },
  },
  ir: {
    translation: {
      "IMDb": "بانک‌اطلاعات اینترنتی فیلم‌ها ",
      "Top": " ",
      "Movies": "فیلم‌های برتر",
      "is the": "محبوب‌ترین و معتبرترین منبع جهانی برای",
      "tv and": "فیلم، سریال و محتوای سلبریتی‌ها است. رتبه‌بندی‌ها و جزئیات",
      "of the": "فیلم‌ها و سریال‌های تلویزیونی را بیابید!",
      "search": "جستجوی فیلم یا سریال",
      "all": "همه",
    },
  },
};
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;