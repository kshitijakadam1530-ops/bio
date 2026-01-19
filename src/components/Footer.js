import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/header-img.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="connect">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={8}>
            <img
              src={logo}
              alt="Logo"
            />
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
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
            <p>Made By Kshitija</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
