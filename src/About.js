import React from "react";
import img from "./assets/circ-ibz.jpg";
import "./About.css";
import { Text } from "@chakra-ui/react";

function About() {
  return (
    <div className="content" style={{ lineHeight: "140%" }}>
      <img className="profile-pic" alt="Ibrahim Sowunmi" src={img} />
      <p>
        I'm a 24 year old Solution Engineer based in based in{" "}
        <a href="https://en.wikipedia.org/wiki/Dublin"> Dublin</a>.
        <br></br>
        <br></br>
        Prior to that I completed a BSc in {" "}
        <span className="highlight">
          <b>Computer Science with Human-computer Interaction</b>
        </span>{" "}
        @
        <a href="https://www.manchester.ac.uk/">
          {" "}
          The University of Manchester
        </a>.
        <br></br>
        Passionate about problem-solving and intuitive design.
      </p>
      <br></br>
      <p>
        I enjoy keeping fit, philosophizing, learning and thinking about things
        like geopolitics, finance, sustainability, digital art, software
        engineering, privacy, technology, etc. When I'm not doing something
        related to those, I'm likely working through my{" "}
        <a href="https://www.goodreads.com/review/list/91646908-ibrahim-sowunmi?ref=nav_mybooks&shelf=read">
          reading list
        </a>{" "}
        or drawing.
      </p>
      <br></br>
      <p>
        <b>Current Read: </b>
        <a href="https://www.goodreads.com/review/list/91646908-ibrahim-sowunmi?ref=nav_mybooks&shelf=currently-reading">
          A few books
        </a>
      </p>
      <br></br>
      <p>
        View {" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1BaHpn0esNKlZVf_trp09vTa45JFFnw7l/view?usp=sharing"
        >
          <b>My Resume!</b>
        </a>
      </p>
      <p>This website is works via S3, Route53 & React...</p>

      <br></br>
      <Text
        bgGradient="linear(to-l, #7928CA,#FF0080)"
        bgClip="text"
        fontSize="3xl"
      >
        <p style={{ textAlign: "center" }}>\ (•◡•) /</p>
      </Text>
      <br></br>
      <p>
        View my&nbsp;
        <a href="https://www.linkedin.com/in/ibrahim-sowunmi/?originalSubdomain=uk">
          LinkedIn
        </a>
        ,
        <a href="https://trailblazer.me/id/isowunmi">
          Trailhead
        </a>
        &nbsp;or&nbsp;
        <a href="https://github.com/ibrahim-sowunmi">
          Github
        </a>
      </p>
    </div>
  );
}

export default About;
