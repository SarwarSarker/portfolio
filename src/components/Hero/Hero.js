import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import {
  default as Col,
  default as Container,
  default as Row,
} from "react-bootstrap/Container";
import "./hero.scss";

const Hero = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 100,
      backDelay: 500,
      backSpeed: 60,
      strings: ["Web Developer", "FrontEnd Developer"],
    });
  }, []);

  return (
    <>
      <section id="hero" className="hero ">
        <Container>
          <Row>
            <Col
              sm={10}
              className="mx-auto py-5 d-flex flex-column text-center"
            >
              <div className="hero_text py-2">
                <h2 className="pt-4 fw-bold">Hello, I'm</h2>
                <h1 className="fw-bold">Sarwar Sarker</h1>
                <h4 className="py-2 fs-1">
                  <span ref={textRef}> </span>
                </h4>
              </div>
              <div className="social pt-5">
                <div className="d-flex flex-row justify-content-center ">
                  <a href="https://github.com/SarwarSarker">
                    <i className="fab fa-github mx-4"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/sarwar-sarker-89aa67192/">
                    <i className="fab fa-linkedin mx-4" href=""></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
