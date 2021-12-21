import React from 'react'
import Books from '../Content/ContentPages/Books.js'
import Podcasts from '../Content/ContentPages/Podcasts.js'
import News from '../Content/ContentPages/News.js'

import { Route, Switch, NavLink } from 'react-router-dom'

function ContentList() {
  return (
    <div className="content contentContainer">
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/content/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/content/podcasts">Podcast</NavLink>
          </li>
          <li>
            <NavLink to="/content/news">News</NavLink>
          </li>
        </ul>
      </div>
      <hr></hr>
      <br></br>
      <Switch>
        <Route exact path="/content/books" component={Books} />
        <Route exact path="/content/podcasts" component={Podcasts} />
        <Route exact path="/content/news" component={News} />
      </Switch>
      <hr></hr>
      <br></br>
    </div>
  )
}

export default ContentList
