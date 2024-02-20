import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  CgCloud
  } from "react-icons/cg";
import {
  SiMicrosoftazure,
  SiVisualstudiocode,
  SiIntellijidea,
  SiAtom,
  SiMysql,
  SiGit,
  SiGithub,
  SiLinux

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiAtom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCloud />
      </Col>
    </Row>
  );
}

export default Toolstack;
