import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations

const resources = {
  en: {
    translation: {
      "Home Page": "Página de inicio",
      "Home": "Página de inicio",
      "Agencies": "Agencias",
      "Maps": "Mapas",
      "News": "Noticias",
      "Translator": "Traductor",
      "Website": "Sitio web",
      "Restaurants": "Los restaurantes",
      "Grocery Stores": "Tiendas de comestibles",
      "Immigration Offices": "Oficinas de inmigracion",
      "Healthcare": "Cuidado de la salud",
      "News Headlines": "Titulares de las noticias",
      "Results": "Resultados",
      "Translator Page": "Página de traductor",
      "Welcome to Imerge": "Bienvenido a Imerge",
      "Post Offices": "Oficinas de correo",
      "Banks": "Bancos",
      "Schools": "Escuelas",
      "Bus Stops": "Paradas de autobus",
      "Airports": "Aeropuertos",
      "Movie Theaters": "Salas de cine",
      "Public Parks": "Parques públicos",
      "Temples": "Templos",
      "Churches": "Iglesias",
      "Mosques": "Mezquitas",
      "Agencies and Resources": "Agencias y Recursos",
      "Go back": "Regresa",
      "Asian": "asiático",
      "Barbecue": "Parilla",
      "Breakfast": "Desayuno",
      "Café": "Café",
      "Chinese": "Chino",
      "European": "Europeo",
      "Fast Food": "Comida rápida",
      "Hamburger": "Hamburguesa",
      "Ice Cream": "Helado",
      "Indian": "Indio",
      "Indonesian": "Indonesio",
      "Irish": "Irlandesa",
      "Italian": "Italiano",
      "Jamaican": "Jamaicano",
      "Japanese": "Japonés",
      "Korean": "Coreano",
      "Mediterranean": "Mediterráneo",
      "Mexican": "Mexicano",
      "Philippine": "Filipino",
      "Portuguese": "Portugués",
      "Sausage": "Chorizo",
      "Seafood": "Mariscos",
      "Soul Food": "Comida para el alma",
      "Spanish Cuisine": "Cocina española",
      "Steak": "filete",
      "Street Food": "Comida de la calle",
      "Sushi": "Sushi",
      "Tapas": "Las tapas",
      "Thai": "Tailandés",
      "Turkish": "turco",
      "Vegetarian": "Vegetariano",
      "Vietnamese": "Vietnamita"
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