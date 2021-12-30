import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Art from './pages/Art/Art'
import Blog from './pages/BlogList/BlogList'
import Content from './pages/Content/ContentList'
import About from './pages/About/About'
import Photosets from './pages/Photosets/Photosets'
import PageNotFound from './pages/404/404'

import './App.css'

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
          <Route path="/content" component={Content} />
          <Route path="/photosets" component={Photosets} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
