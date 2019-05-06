import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";
import Maps from "./pages/Maps";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Translator from "./pages/Translator";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "Welcome to Imerge": "Bienvenido a Imerge"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  console.log(t("Welcome to Imerge"));
  return (
    // Router component initialized to virtual DOM
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Agencies" component={Agencies} />
          <Route exact path="/Maps" component={Maps} />
          <Route exact path="/News" component={News} />
          <Route exact path="/Translator" component={Translator} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;