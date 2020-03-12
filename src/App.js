import React from "react";
import Recipes from "./Recipe/Recipes";
import Nav from "./Nav";
import Home from "./Home/Home";
import Socialmedia from "./Socialmedia";
import Footer from "./Footer";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <div className="App">
          <p className="hidden"> Hidden text ghghjhjkjkj </p>
          <div style={{ marginTop: "84px" }}></div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipes" component={Recipes} />
          </Switch>
        </div>
      </Router>
      <Socialmedia />
      <Footer />
    </React.Fragment>
  );
}

export default App;
