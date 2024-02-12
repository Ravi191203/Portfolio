import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import DSMS from "../../Assets/Projects/DSMS.png";

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
              imgPath={DSMS}
              isBlog={false}
              title="Dairy Serve Management System"
              description="The Dairy Serve Management System is a comprehensive solution designed to manage various aspects of a dairy business. It includes multiple modules and functionalities tailored to streamline operations, manage data efficiently, and provide an intuitive interface for different user roles."
              ghLink="https://github.com/Ravi191203/DAIRY-SERVE-MANAGEMENT-SYSTEM"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="RRGS Tech Showcase"
              description="Explore my personal site, where I showcase my journey in computer science and web development. Dive into my projects, technical skills, and professional experiences, all curated to reflect my passion for technology and continuous learning."
              ghLink="https://sites.google.com/view/rrgscsstudent/home/"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="Welcome to my portfolio website, crafted using React JS to showcase my skills, projects, and professional journey. Explore my work, learn about my background, and see how I blend creativity with code to build user-friendly and responsive applications. Whether you’re here to view my projects or connect with me, I hope my portfolio provides an insightful glimpse into my passion for technology and innovation."
              ghLink="https://sites.google.com/view/rrgscsstudent/home/"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
