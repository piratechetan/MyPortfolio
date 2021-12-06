import React from "react";
import Typed from "react-typed";
import { ImGithub, AiFillFacebook } from "react-icons/all";
import Particle from "../particles/particle.js";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../../assets/homelogo.png'
import SocialIcons from "../Social/SocialIcons.js";
const Header = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> CHETAN SHARMA</strong>
              </h1>

              <div style={{ paddingLeft: 50,paddingTop:10, textAlign: "left" }}>
              <Typed
          className="typed-text"
          strings={[
            "Developer",
            "Programmer",
            
          ]}
          typeSpeed={90}
          backSpeed={90}
          loop
        />
        
              </div>
              <div style={{marginLeft:50,marginTop:20}}>
              <SocialIcons />
              </div>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      
    </section>
  );
};

export default Header;
