// Import react a js library for the frontend
import React from "react";
// BrowserRouter is the router implementation for HTML5 browsers.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import the user made files: home, saved, NoMatch, Nav
import Home from "./pages/Home";
import Agencies from "./pages/Agencies";
import Maps from "./pages/Maps";
import Navbar from "./components/Navbar";
import Translator from "./pages/Translator";


function App() {
  return (
    // Router component initialized to virtual DOM
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Agencies" component={Agencies} />
          <Route exact path="/Maps" component={Maps} />
          <Route exact path="/Translator" component={Translator} />
         
        </Switch>
      </div>
    </Router>
  );
}
// exports makes App available to other modules
export default App;