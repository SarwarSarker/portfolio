import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import cv from "../../assets/cv_sarwar.pdf";
import profile from "../../assets/profile.png";
import "./about.scss";

const About = () => {
  return (
    <>
      <section className="about py-5" id="about">
        <Container className="py-xl-5 py-lg-3">
          <h1 className="pb-md-5 pb-4  text-uppercase text-center fw-bold">
            About Me
          </h1>
          <Row className="">
            <Col lg={6} className="text-center">
              <Image
                src={profile}
                className="img-fluid profile__img"
                alt="sarwar"
              />
            </Col>
            <Col className="pr-xl-5 mt-xl-4 mt-lg-0 mt-4 ">
              <h2 className="fw-bold">
                I'm <span className="title"> Sarwar Sarker</span>
              </h2>
              <h4 className="">FrontEnd Web Developer</h4>
              <p className="fw-lighter  py-4">
                I am a FrontEnd Developer from Dhaka. I started my journey as a
                web developer back in 2019. Since then, I have done lots of
                personal and corporate projects. I am a self-taught web
                developer. I love to work with React, Firebase, Node JS, Express
                JS, MySQL, MongoDB PHP, Laravel and all other related
                technologies.
              </p>
              <div className="pt-3">
                <Button size="lg" className="download_btn mx-2" href={cv}>
                  Download CV
                </Button>
                <Button
                  size="lg"
                  className="github_btn mx-2"
                  href="https://github.com/SarwarSarker"
                >
                  Github
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
