import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import './Photosets.css'

import { Text, Image } from '@chakra-ui/react'
import PhotoCard from '../../components/PhotoCard/PhotoCard'
import bb from '../../assets/art/3.jpg'

function Photosets(props) {
  return (
    <>
      <Text>Photosets</Text>
      <Text>Shot with Nikon Z50,</Text>
      <Text>Shot with Nikon Z50,</Text>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/photoset">
              <PhotoCard src={bb} text="Trip to jlhsdvfu" alt="Boogie boys" />
            </NavLink>
          </li>
        </ul>
      </div>
      <iframe
        src="https://open.spotify.com/embed/show/79CkJF3UJTHFV8Dse3Oy0P?utm_source=generator&theme=0"
        width="100%"
        height="232"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
      <Switch>
        <Route exact path="/photoset" component={null} />
      </Switch>
    </>
  )
}

export default Photosets
