import React from 'react'
import Blog1 from '../../blog/Blog1.js'
import Blog2 from '../../blog/Blog2.js'
import Blog3 from '../../blog/Blog3.js'
import Blog4 from '../../blog/Blog4.js'
import Blog5 from '../../blog/Blog5.js'

import { Route, Switch, NavLink } from 'react-router-dom'

function Blog() {
  return (
    <div className="content blogContainer">
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/blog/5">The CV Guide I wish I had</NavLink>
          </li>
          <li>
            <NavLink to="/blog/4">You Are What You Consume</NavLink>
          </li>
          <li>
            <NavLink to="/blog/3">101 Schmoney Advice</NavLink>
          </li>
          <li>
            <NavLink to="/blog/2">Search For SEO </NavLink>
          </li>
          <li>
            <NavLink to="/blog/1">Beginning</NavLink>
          </li>
        </ul>
      </div>
      <hr></hr>
      <br></br>
      <Switch>
        <Route exact path="/blog/5" component={Blog5} />
        <Route exact path="/blog/4" component={Blog4} />
        <Route exact path="/blog/3" component={Blog3} />
        <Route exact path="/blog/2" component={Blog2} />
        <Route exact path="/blog/1" component={Blog1} />
      </Switch>
      <hr></hr>
      <br></br>
    </div>
  )
}

export default Blog
