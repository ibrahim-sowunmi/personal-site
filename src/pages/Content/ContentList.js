import React from 'react'
import Books from '../Content/ContentPages/Books.js'
import Podcasts from '../Content/ContentPages/Podcasts.js'
import News from '../Content/ContentPages/News.js'

import { Route, Switch, NavLink } from 'react-router-dom'

function ContentList() {
  return (
    <div className="content contentContainer">
      <Switch>
        <Route exact path="*" component={Books} />
      </Switch>
      <hr></hr>
      <br></br>
    </div>
  )
}

export default ContentList
