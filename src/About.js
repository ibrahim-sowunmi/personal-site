import React from "react";
import img from "./assets/circ-ibz.jpg";
import "./About.css";

function About() {
  return (
    <div>
      <img className="profile-pic" alt="scruffy-as-hell-pic" src={img}/>
      <p>I'm a 23 year old Student based in <a href="https://en.wikipedia.org/wiki/Manchester"> Manchester</a>.<br></br><br></br>
        Final year, pursuing a BSc in{" "}
        <span className="highlight">
          Computer Science with Human-computer Interaction
        </span>{" "} @
        <a href="https://www.manchester.ac.uk/"> The University of Manchester</a>
        , graduating in 2021. Passionate about problem-solving and intuitive
        design, with a burgeoning interest in devOps.
      </p><br></br>
      <p>
        I enjoy keeping fit, philosophizing, learning and thinking about things
        like geopolitics, finance, sustainability, digital art, software
        engineering, privacy, technology, etc. When I'm not doing something related to
        those, I'm likely working through my {" "}
        <a href="https://www.goodreads.com/review/list/91646908?ref=nav_mybooks">
          reading list
        </a> or drawing.
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
          <span className="highlight">My Resume!</span>
        </a>
      </p>
      <p>This website is works via S3, Route53 & React...</p>
      <br></br>
      <p style={{textAlign: "center"}}>
        \ (•◡•) /
      </p>
    </div>
  );
}

export default About;
