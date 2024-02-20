import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Surya </span>
            from <span className="purple"> Tamil Nadu, India.</span>
            <br />
            I'm now pursuing my Bachelor's degree in Computer Science and Engineering at the SNS College of Engineering..
            <br />
            I had finished my education at Sri Shanmuka Matric. Hr. Sec. School in my hometown.
            Thiruvarur.
            <br />
            <br />
            Apart from coding, I enjoy many other activities!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Endeavor to construct things that have an impact!"{" "}
          </p>
          <footer className="blockquote-footer">Surya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
