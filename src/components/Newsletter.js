import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = ({ status }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    downloadResume();
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/resume/Kshitija_Resume.pdf";
    link.download = "Kshitija_Resume.pdf";
    link.click();
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={8} xl={6}>
            <h3>
              Interested in learning more about my qualifications? Download my
              resume here.
            </h3>
          </Col>
          <Col md={4} xl={6}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <button type="submit">RESUME</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
