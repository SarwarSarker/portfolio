import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./contact.scss";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact py-5">
        <Container className="py-md-5">
          <div className="text-center mb-sm-5 mb-5">
            <h5 className="title text-uppercase">Contact</h5>
            <h3 className="fs-1 fw-bold ">
              Let's get in touch and build something together
            </h3>
          </div>
          <Row className="py-5">
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <div className="contact__home p-4 rounded-3 text-center">
                <i className="fas fa-home pb-2"></i>
                <h3 className="fs-4 pt-2">Location</h3>
                <p className="">Gazipur, Dhaka</p>
              </div>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <div className="contact__home p-4 rounded-3 text-center">
                <i className="fas fa-phone-alt pb-2"></i>
                <h3 className="fs-4 pt-2">Phone</h3>
                <p className="">+88 01836462147</p>
              </div>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <div className="contact__home p-4 rounded-3 text-center">
                <i className="far fa-envelope pb-2"></i>
                <h3 className="fs-4 pt-2">Email Address</h3>
                <p className="">sarwarsarker00@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
