import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";
import Maps from "./pages/Maps";
import Navbar from "./components/Navbar";
import News from "./pages/News";
import Translator from "./pages/Translator";
import ReactDOM from "react-dom";
// the hook
import { useTranslation } from 'react-i18next';
import "./i18n"


function App() {
  const { t } = useTranslation();

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