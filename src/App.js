import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar.js";
import Art from "./Art";
import Blog from "./Blog";
import About from "./About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div class="container">
        <div className="content-top">
          <Navbar />
        </div>
        <hr></hr>
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/art" component={Art} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
