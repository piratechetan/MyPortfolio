import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Particle from "../../particles/particle";
import ProjectsCards from './ProjectsCards'
const Portfolio = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#C0C0C0" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectsCards
              isBlog={false}
              title="Todos"
              description="Todos is a Mobile app to add,update,delete,mark complete your todo tasks."
              link="https://github.com/piratechetan/Todos.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectsCards
              imgPath={'https://camo.githubusercontent.com/5f7d99c815dc24db7f9817f880185e42b77f2f82125995bcd0624e4fa98bc015/68747470733a2f2f7777772e6c696e6b706963747572652e636f6d2f712f494d475f32303231303631365f3136343035392e6a7067'}
              isBlog={false}
              title="SpeedChat"
              description="Speedchat is a online chat app inspired from WhatsApp Messaging App."
              link="https://github.com/piratechetan/Speedchat.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectsCards
              
              isBlog={false}
              title="PlaceMemo"
              description="PlaceMemo is online image gallery mobile app based on react-native,javascript,flicker Api. In which i am fetching images data from flicker api and implement as image gallery."
              link="https://github.com/piratechetan/placeMemo.git"
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
};

export default Portfolio;
