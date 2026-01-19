
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
 
  return (
    <section className="contact" id="experience">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Experience</h2>
                       <Row>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    MERN Stack Developer
                  </h6>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    25/11/24 - Present
                  </h6>
                  </Col>
                 </Row>
                 <Row>
                  <Col size={12} sm={6} className="px-1">
                  <a href="https://deepmindsinfotech.com/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h4>
                    Deepminds Infotech
                  </h4>
                  </a>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    Pune
                  </h6>
                  </Col>
                 </Row>
                <Row>
                  ------------------------------------------
                </Row>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    Full Stack Developer
                  </h6>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    18/7/24 - 25/11/24
                  </h6>
                  </Col>
                 </Row>
                 <Row>
                  <Col size={12} sm={6} className="px-1">
                  <a href="https://lotlitetechnologies.com/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h4>
                    Lotlite Technology
                  </h4>
                  </a>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    Pune
                  </h6>
                  </Col>
                 </Row>
                <Row>
                  ------------------------------------------
                </Row>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    Full Stack Developer
                  </h6>
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    4/3/24 - 12/7/24
                  </h6>
                  </Col>
                 </Row>
                 <Row>
                  <Col size={12} sm={6} className="px-1">
                  <a href="https://stacklab.in/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h4>
                    Stacklab.in
                  </h4>
                  </a>
                  
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                  <h6>
                    Pune
                  </h6>
                  </Col>
                 </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
