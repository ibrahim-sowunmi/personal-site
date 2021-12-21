import React from 'react'
import img from '../../assets/circ-ibz.jpg'
import './About.css'
import { Text } from '@chakra-ui/react'

function About() {
  return (
    <div className="content" style={{ lineHeight: '140%' }}>
      <img className="profile-pic" alt="Ibrahim Sowunmi" src={img} />
      <p>
        I'm currently a 24 year old Solution Engineer based in based in{' '}
        <a href="https://en.wikipedia.org/wiki/Dublin"> Dublin</a>.<br></br>
        <br></br>
        Prior to that I completed a BSc in{' '}
        <span className="highlight">
          <b>Computer Science with Human-computer Interaction</b>
        </span>{' '}
        @
        <a href="https://www.manchester.ac.uk/">
          {' '}
          The University of Manchester
        </a>
        .<br></br>
        Passionate about problem-solving and intuitive design.
      </p>
      <p>
        <br></br>
        <b>What’s the point of this site?</b>
        <br></br>
        <br></br>I started this to create a bit of a digital presence (No
        socials bar Linkedin). I’ve been meaning to write about random things
        for a while, and I got tired of my ideas/thoughts stacking up in my
        brain and gradually fading into nothing.<br></br>
        Also, writing is just a good skill to have! I don't write much as I've
        been on the STEM fast track, and during Uni all the writing I did felt
        like typing with my toes. This site is an attempt to develop that part
        of my brain a bit (not the toe typing part).
        <br></br>
        <br></br>
        <b>About me</b>
        <br></br>
        <br></br>
        <p>
          I enjoy travelling, keeping fit (
          <i>
            Boxing, Running, Calisthenics, Gym & telling people I'll start Yoga
          </i>
          ), philosophizing, learning and thinking about things like
          geopolitics, finance, crypto, urban/environmental sustainability,
          digital art, software engineering, neuroscience, economics,
          technology, etc. When I'm not doing something related to those, I'm
          likely working through my{' '}
          <a href="https://www.goodreads.com/review/list/91646908-ibrahim-sowunmi?ref=nav_mybooks&shelf=read">
            reading list.
          </a>
        </p>
      </p>
      <br></br>
      <p>
        <b>Current Read: </b>
        <a href="https://www.goodreads.com/review/list/91646908-ibrahim-sowunmi?ref=nav_mybooks&shelf=currently-reading">
          A few books
        </a>
      </p>
      <br></br>
      <p>This website works via S3, Route53 & React...</p>

      <br></br>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="3xl"
      >
        <p style={{ textAlign: 'center' }}>\ (•◡•) /</p>
      </Text>
      <br></br>
      <p>
        View my&nbsp;
        <a href="https://www.linkedin.com/in/ibrahim-sowunmi/?originalSubdomain=uk">
          LinkedIn
        </a>
        ,&nbsp;
        <a href="https://trailblazer.me/id/isowunmi">Trailhead</a>
        ,&nbsp;
        <a href="https://open.spotify.com/playlist/2SeQ77fxp8j82bTNb7AJ91?si=aa70e218a8f74f06">
          Spotify
        </a>
        &nbsp;or&nbsp;
        <a href="https://github.com/ibrahim-sowunmi">Github</a>
      </p>
    </div>
  )
}

export default About
