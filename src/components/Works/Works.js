import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import exprosis from "../../assets/exprosis.png";
import freedm from "../../assets/freedm.png";
import image from "../../assets/imge.png";
import linkedin from "../../assets/linkedin.png";
import portfolio from "../../assets/portfolio.png";
import shopping from "../../assets/shopping.png";
import "./works.scss";

const Works = () => {
  return (
    <>
      <section id="works" className="work py-5">
        <Container className="py-md-5">
          <div className="text-center">
            <h5 className="title-small text-uppercase">Portfolio</h5>
            <h3 className="fs-1 fw-bold">Some of my most recent projects</h3>
          </div>
          <Row className="py-5">
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={portfolio} />
                <Card.Body>
                  <Card.Title className="fs-4">Portfolio</Card.Title>
                  <Card.Text>
                    Portfolio website built with Reactjs , Bootstrap 5.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a className="card__btn" href="#">
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={exprosis} />
                <Card.Body>
                  <Card.Title className="fs-4">Exprosis</Card.Title>
                  <Card.Text>
                    Exprosis website built with Reactjs , Styled-Components,
                    React-Router-Dom.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://condescending-hamilton-0a2dfb.netlify.app/"
                    >
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title className="fs-4">Image Search App</Card.Title>
                  <Card.Text>
                    A Image search app built with Bootstrap, reactjs and pixabay
                    Api
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://silly-pike-2cbcee.netlify.app/"
                    >
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={linkedin} />
                <Card.Body>
                  <Card.Title className="fs-4">Linkedin Clone</Card.Title>
                  <Card.Text>
                    Linkedin Clone built with Reactjs, redux, reduxToolkit ,
                    firebase.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://linkedin-clone-a8c0f.web.app/"
                    >
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={shopping} />
                <Card.Body>
                  <Card.Title className="fs-4">Shopping Cart App</Card.Title>
                  <Card.Text>
                    A simple shopping cart built with Bootstrap, Reactjs,
                    ContextApi, React-Router-Dom.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://hardcore-mclean-ea0baf.netlify.app/"
                    >
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={freedm} />
                <Card.Body>
                  <Card.Title className="fs-4">Free DM Tools</Card.Title>
                  <Card.Text>
                    Free DM Tools website built with wordpress and php
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a className="card__btn" href="https://freedmtools.com/">
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Works;
