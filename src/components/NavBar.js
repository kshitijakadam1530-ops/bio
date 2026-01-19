import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Col size={12} sm={4} className="text-center text-sm-start">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kshitijakadamswd/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://github.com/Kshitijakadam15">
                <img src={navIcon4} alt="" />
              </a>
              <a href="https://www.google.com/maps/place/Thergaon+Phata,+Shrikrushna+Colony,+Thergaon,+Pimpri-Chinchwad,+Maharashtra+411033/@18.617949,73.7478053,14z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b99f1d5dc57f:0x766f99f095d4539c!8m2!3d18.6179505!4d73.7684049!16s%2Fg%2F11by_mcgn9?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/artholic_mind/">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#experience"
                className={
                  activeLink === "experience"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("experience")}
              >
                Experience
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to="#connect">
                <button className="vvd">
                  <span>Reach Out !</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
