import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import exprosis from "../../assets/exprosis.png";
import findestate from "../../assets/findstate.png";
import mediliver from "../../assets/mediliver.png";
import linkedin from "../../assets/linkedin.png";
import adloc from "../../assets/adloc.png";
import ecom from "../../assets/ecom.png";
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
                <Card.Img variant="top" src={mediliver} />
                <Card.Body>
                  <Card.Title className="fs-4">
                    Mediliver Pharmacy App
                  </Card.Title>
                  <Card.Text>
                    Mediliver Pharmacy app built with Html, CSS, Botstrap,
                    Reactjs, Redux, Redux-Toolkit, React Fomilk, Express JS,
                    MongoDB
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://mediliver.netlify.app/"
                    >
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={findestate} />
                <Card.Body>
                  <Card.Title className="fs-4">
                    FindEstate - Real Estate
                  </Card.Title>
                  <Card.Text>
                    Ecommerce app built with Html, CSS, Tailwind CSS, Reactjs,
                    Redux, Redux-Toolkit, React Fomilk, Express JS, MongoDB.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://findestate.netlify.app/"
                    >
                      Live
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-4" xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={ecom} />
                <Card.Body>
                  <Card.Title className="fs-4">Ecommerce App</Card.Title>
                  <Card.Text>
                    Ecommerce app built with Html, CSS, Tailwind CSS, Reactjs,
                    Redux, Redux-Toolkit,, React Fomilk, Firebase.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://ecommerce-f3eea.web.app/"
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
                    Linkedin Clone built with Html, CSS, Reactjs, Redux,
                    Redux-Toolkit , Firebase.
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
                <Card.Img variant="top" src={adloc} />
                <Card.Body>
                  <Card.Title className="fs-4">
                    AdLoc Admin dashboard
                  </Card.Title>
                  <Card.Text>
                    AdLoc Admin dashboard built with Reactjs , Tailwind CSS,
                    ContextApi etc.
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <a
                      className="card__btn"
                      href="https://flamboyant-euclid-d1b96c.netlify.app/"
                    >
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
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Works;
