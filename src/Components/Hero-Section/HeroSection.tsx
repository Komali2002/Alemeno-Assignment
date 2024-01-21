import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero-img1.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere<br />Learn on your<br />Suitable Schedule
              </h2>
              <p className="mb-5">
              Unlock your potential with our wide range of courses.
            <br />Learn from experts in various fields<br />and take your skills to the next level.
              </p>
            </div>
          </Col>
          <Col lg="6" md="6 mt-2">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
