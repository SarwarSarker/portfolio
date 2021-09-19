import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./resume.scss";

const Resume = () => {
  return (
    <>
      <section className="resume py-5" id="resume">
        <Container className="container py-lg-5 py-4">
          <div className="text-center mb-sm-5 mb-5">
            <h5 className="title-small text-uppercase">Resume</h5>
            <h3 className="fs-1 fw-bold ">Awesome Journey</h3>
          </div>
          <Row className="">
            <Col xs={12} md={6} className="">
              <h5 className="fs-2 pb-2">
                <i className="fas fa-graduation-cap"></i> Education
              </h5>
              <div className="ms-4 my-3">
                <div className="column p-4 m-2 mb-4 border border-danger rounded-3">
                  <h2 className="fs-4">Bachelor in Computer Engineering</h2>
                  <p className="fs-6">Daffodil International University</p>
                  <h6>
                    <i className="fas fa-calendar-alt"></i> 2015 - 2019
                  </h6>
                </div>
                <div className="column p-4 m-2 mb-4 border border-danger rounded-3">
                  <h2 className="fs-4">Higher Secondary School Certificate</h2>
                  <p className="fs-6">Milestine College</p>
                  <h6>
                    <i className="fas fa-calendar-alt"></i> 2011 - 2013
                  </h6>
                </div>
                <div className="column p-4 m-2 mb-4 border border-danger rounded-3">
                  <h2 className="fs-4">Secondary School Certificate</h2>
                  <p className="fs-6">Milestine College</p>
                  <h6>
                    <i className="fas fa-calendar-alt"></i> 2009 - 2011
                  </h6>
                </div>
              </div>
            </Col>

            <Col xs={12} md={6} className="mt-lg-0 mt-4">
              <h5 className="fs-2 pb-2">
                <i className="fas fa-briefcase"></i> Experience
              </h5>
              <div className="ms-4 my-3">
                <div className="column p-4 m-2 mb-4 border border-danger rounded-3">
                  <h2 className="fs-4">WordPress Developer</h2>
                  <p className="fs-6">WooFx</p>
                  <p>I joined here as a Intern.</p>
                  <h6>
                    <i className="fas fa-calendar-alt"></i> Nov, 2020 - Feb,
                    2021
                  </h6>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Resume;
