import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Ecommerce.png";
import chatify from "../../Assets/Projects/Weather.png";
 import bitsOfCode from "../../Assets/Projects/IMS.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IOT-BASED WEATHER MONITORING SYSTEM"
              description="
              The IoT-based Weather Monitoring System utilizes sensors to collect real-time data on temperature, humidity, pressure, wind speed, and rainfall. This data is processed by a microcontroller and transmitted to a cloud platform for storage and analysis. Users can access weather information through a web or mobile application, enabling remote monitoring. The system offers alerts for specific weather conditions, facilitating informed decision-making."
              ghLink="https://github.com/Surya01122002/Wheather-Monitoring-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Inventory Management System"
              description="The Inventory Management Web Application is designed to efficiently track and manage stock levels, orders, and product details for businesses. It provides real-time insights into inventory status, automates order processes, and helps prevent stockouts or overstock situations. Users can easily add, update, or remove items, generate reports, and streamline inventory operations through an intuitive web interface. This application improves accuracy, reduces manual errors, and enhances overall inventory control for businesses of any scale."
              ghLink="https://github.com/Surya01122002/Inventory-Management-System"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="SNS Ecommerce Website"
              description="The SNS Ecommerce Application is a specialized platform designed for the SNS Family, offering a unique shopping experience for college students, staff, alumni, and their family members. While open to all users for product purchases, exclusive seller eligibility is reserved for SNS Family members, encouraging a diverse marketplace with distinctive offerings. Enjoy an extraordinary shopping experience with innovative features and modules tailored to enhance the overall user experience."
              ghLink="https://github.com/Surya01122002/SNSEcommerce"
              // demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
