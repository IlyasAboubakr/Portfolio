import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";
import original from "./original.png";
import original2 from "./original2.png"

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
              title="Raja Club Athletic Shop"
              description="A dynamic e-commerce platform built with PHP. The shop allows fans to browse and purchase official merchandise, including jerseys, training gear, and accessories."
              ghLink="https://github.com/IlyasAboubakr/Raja-Club-Athletic-shop-website"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={original}
              isBlog={false}
              title="Discord Bot"
              description="Discord Bot is a customizable automation bot you created and published on GitHub to extend the functionality of a Discord server.It’s designed to interact with users in Discord using programmed commands, respond to messages, and perform automated tasks when installed and run on a server."
              ghLink="https://github.com/IlyasAboubakr/Discord-Bot"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={original2}
              isBlog={false}
              title="Discord Bot"
              description="My personal portfolio features some of my GitHub projects, along with my resume and technical skills."
              ghLink="https://github.com/IlyasAboubakr/Portfolio"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
