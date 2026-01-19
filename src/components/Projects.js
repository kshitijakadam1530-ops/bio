import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/judge0 (1).png";
import projImg2 from "../assets/img/judge0 (2).png";
import projImg3 from "../assets/img/judge0 (3).png";
import projImg4 from "../assets/img/judge0 (4).png";
import projImg6 from "../assets/img/Screenshot (257).png"
import projImg7 from "../assets/img/Screenshot 2026-01-17 180322.png"
import projImg8 from "../assets/img/Screenshot 2026-01-17 180251.png"
import projImg9 from "../assets/img/Screenshot 2026-01-17 180342.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
     {
      title: "Finxl Lms",
      description: "Learning Management System",
      imgUrl: projImg9,
      link:"https://finxlerp.com/login"
    },
     {
      title: "CSA Lms",
      description: "Learning Management System",
      imgUrl: projImg8,
      link:"https://csalms.deepmindsit.com/login"
    },
     {
      title: "Saatvicfoodss",
      description: "Saatvic Foodss is an Indian food brand",
      imgUrl: projImg7,
      link:"https://saatvicfoodss.com/"
    },
    {
      title: "THIS SIDE",
      description: "showcasing identity through Portfolios and Mini-websites",
      imgUrl: projImg3,
      link:"https://www.thisside.in/"
    },
    
    {
      title: "My TestLab",
      description: "Compiler using judge zero",
      imgUrl: projImg1,
    },
    {
      title: "Property Management",
      description: "Manage the RealEstate",
      imgUrl: projImg2,
    },
    {
      title: "Eccomerce Website",
      description: "",
      imgUrl: projImg4,
    },
    {
      title: "SOP",
      description: "The Print Solution Website",
      imgUrl: projImg6,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                   Designed and implemented full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js) stack.
                  </p>
                  <p>
                 Built RESTful APIs using Node.js and Express.js, handling complex business logic and integrating third-party services.
                 Created dynamic, responsive user interfaces with React.js , enhancing user experience and application performance.
                 Designed and maintained MongoDB databases and MySql implementing efficient data models and ensuring data integrity.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
        
                        <Nav.Link eventKey="first">Projects Done By Me</Nav.Link>
                     
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                   
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="HTML image" src={colorSharp2}></img>
    </section>
  );
};
