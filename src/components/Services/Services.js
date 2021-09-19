import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./services.scss";

const Services = () => {
  return (
    <>
      <section id="services" className="services">
        <Container className="py-5">
          <h1 className="pt-5 text-center">WHAT I DO?</h1>
          <Row className="py-5">
            <Col className="">
              <div className="bottom-gd p-4">
                <span>01</span>
                <h3 className="mt-4">Content Marketing </h3>
                <p className="mt-2">
                  Integer sit amet mattis quam, sit amet ul tricies velit.
                  Praesent ullam corper dui turpis dolor sit amet.
                </p>
              </div>
            </Col>
            <Col className="">
              <div className="bottom-gd p-4">
                <span>
                  <i className="fab fa-php"></i>
                </span>
                <h3 className="mt-4">Php Web development</h3>
                <p className="mt-2">
                  PHP, Laravel, Wordpress Theme Customization, Build
                  Custom-theme(Basic knowledge), Child-theme Making &
                  Customization.
                </p>
              </div>
            </Col>
            <Col className="">
              <div className="bottom-gd p-4">
                <span>
                  <i className="fas fa-laptop"></i>
                </span>
                <h3 className="mt-4">Web design and development</h3>
                <p className="mt-2">
                  HTML, CSS, Sass, JavaScript, Bootstrap, JavaScript, ReactJs
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Services;
