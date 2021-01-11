import React from "react";
import Blog1 from "./Blog1.js";
import Blog2 from "./Blog2.js";
import Blog3 from "./Blog3.js";

import { Route, Switch, NavLink } from "react-router-dom";

function Blog() {
  return (
    <div className="content blogContainer">
      <div className="nav-links">
        <ul>
        <li>
            <NavLink to="/blog/3">Short finance advice piece</NavLink>
          </li>
          <li>
            <NavLink to="/blog/2">Search for SEO </NavLink>
          </li>
          <li>
            <NavLink to="/blog/1">Beginning</NavLink>
          </li>
        </ul>
      </div>
      <hr></hr>
      <br></br>
      <Switch>
        <Route exact path="/blog/3" component={Blog3} />
        <Route exact path="/blog/2" component={Blog2} />
        <Route exact path="/blog/1" component={Blog1} />
      </Switch>
      <hr></hr>
      <br></br>
    </div>
  );
}

export default Blog;
