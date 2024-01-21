import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <div>

      <h1 className="text-center text-primary mt-2">About Us</h1>
      <div className="mx-5 my-4 text-justify">
    <p>
        We believe in healthy living. And believe if people eat nutritious food every day, the world would be a
        healthier place. Early childhood is the best time to inculcate healthy eating habits.
    </p>
    <p>
        Our application works as a tool to help kids eat healthier every day. In our solution, we use behaviour science
        and gamification to make healthy eating an engaging and fun activity for kids. This also provides a strong
        leverage for parents to encourage their kids to imbibe healthy eating habits under their supervision.
    </p>
    <p>
        Alemeno is an early stage startup founded by a passionate team with experience of building consumer internet
        products
    </p>
    <p>
        We want to use our skills and experience to solve meaningful problems.&nbsp;
    </p>
</div>
        </div>
  );
};

export default AboutUs;
