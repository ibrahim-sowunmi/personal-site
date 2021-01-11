import React from "react";
import img from "./assets/circ-ibz.jpg";
import "./About.css";
import { Text } from "@chakra-ui/react";

function About() {
  return (
    <div className="content">
      <img className="profile-pic" alt="Ibrahim Sowunmi" src={img} />
      <p>
        I'm a 23 year old Student based in{" "}
        <a href="https://en.wikipedia.org/wiki/Manchester"> Manchester</a>.
        <br></br>
        <br></br>
        Final year, pursuing a BSc in{" "}
        <span className="highlight">
          <b>Computer Science with Human-computer Interaction</b>
        </span>{" "}
        @
        <a href="https://www.manchester.ac.uk/">
          {" "}
          The University of Manchester
        </a>
        , graduating in 2021. Passionate about problem-solving and intuitive
        design, with a burgeoning interest in devOps.
      </p>
      <br></br>
      <p>
        I enjoy keeping fit, philosophizing, learning and thinking about things
        like geopolitics, finance, sustainability, digital art, software
        engineering, privacy, technology, etc. When I'm not doing something
        related to those, I'm likely working through my{" "}
        <a href="https://www.goodreads.com/review/list/91646908?ref=nav_mybooks">
          reading list
        </a>{" "}
        or drawing.
      </p>
      <br></br>
      <p>
        <b>Current Read: </b>
        <a href="https://www.goodreads.com/book/show/40876575-utopia-for-realists?ac=1&from_search=true&qid=dgP87czMVv&rank=1">
          Utopia for Realists
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
      <p>
        View my&nbsp;
        <a href="https://www.linkedin.com/in/ibrahim-sowunmi/?originalSubdomain=uk">
          LinkedIn
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
