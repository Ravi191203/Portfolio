import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">RAVI RAGHAVENDRA G S </span>
            from <span className="purple"> Karnataka, India.</span>
            <br />
            I am currently looking for a Opportunity to work with a company.
            <br />
            I have completed BCA in Computer Science at Jsscacs.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing E-Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every line of code is a step towards progress!"{" "}
          </p>
          <footer className="blockquote-footer">rrgs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
