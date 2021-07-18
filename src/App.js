import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Navbar/Header";
import Surah from "./component/Surah/Surah";
import SpesifikSurah from "./component/Surah/SpesifikSurah";
import Home from "./component/Home/Home";
import { Footer } from "./component/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/surah" component={Surah} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
