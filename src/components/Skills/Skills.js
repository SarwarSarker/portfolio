import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./skills.scss";

const Skills = () => {
  return (
    <>
      <section className="skills py-5" id="skills">
        <Container className=" py-md-5 py-4">
          <div className="text-center mb-sm-5 mb-4">
            <h5 className="title-small  text-uppercase">My Skills</h5>
            <h3 className="fs-1 fw-bold">My Expertise Area</h3>
          </div>
          <Row className="py-lg-4">
            <Col xs={12} md={6} className="">
              <div className="progress-info info1">
                <h6 className="progress-tittle">
                  HTML/CSS/SASS <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped gradient-2"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info2">
                <h6 className="progress-tittle">
                  JavaScript <span className="">80%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped gradient-3"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info3 mb-0">
                <h6 className="progress-tittle">
                  React JS <span className="">80%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped gradient-4"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="mt-lg-0 mt-5">
              <div className="progress-info info4">
                <h6 className="progress-tittle">
                  Bootstrap <span className="">95%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped gradient-2"
                    role="progressbar"
                    style={{ width: "95%" }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info5">
                <h6 className="progress-tittle">
                  Wordpress <span className="">70%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped gradient-3"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="progress-info info6 mb-0">
                <h6 className="progress-tittle">
                  Laravel <span className="">70%</span>
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-striped gradient-4"
                    role="progressbar"
                    style={{ width: "70%" }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;
