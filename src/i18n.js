import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
const resources = {
  en: {
    translation: {
      "Home Page":"Página de inicio",
      "Home":"Página de inicio",
      "Agencies":"Agencias",
      "Maps":"Mapas",
      "News":"Noticias",
      "Translator":"Traductor",
      "Website":"Sitio web",
      "Resturants":"Los restaurantes",
      "Grocery nearby": "Tienda de comestibles cerca",
      "Immigration offices nearby":"Oficinas de inmigración cercanas",
      "Healthcare nearby":"Cuidado de la salud cerca",
      "News Headlines":"Titulares de las noticias",
      "Results":"Resultados",
      "Translator Page":"Página de traductor",
      "Welcome to Imerge":"Bienvenido a Imerge"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;