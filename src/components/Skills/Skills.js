import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./skills.scss";
import html from '../../assets/icons/html.svg'
import react from '../../assets/icons/react.svg'
import javascript from '../../assets/icons/javascript.svg'
import sass from '../../assets/icons/sass.svg'
import css from '../../assets/icons/css.svg'
import php from '../../assets/icons/php.svg'
import node from '../../assets/icons/node.svg'
import express from '../../assets/icons/express.svg'
import bootstrap from '../../assets/icons/bootstrap.svg'
import tailwindcss from '../../assets/icons/tailwindcss.svg'
import laravel from '../../assets/icons/laravel.svg'

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
        <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={html} alt='html' />
                <p className="">HTML</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={css} alt='css' />
                <p className="">CSS</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={sass} alt='sass' />
                <p className="">SASS</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={bootstrap} alt='bootstrap' />
                <p className="">Bootstrap</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={tailwindcss} alt='tailwindcss' />
                <p className="">Tailwind CSS</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={javascript} alt='javascript' />
                <p className="">JavaScript</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={react} alt='react' />
                <p className="">React.js</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={node} alt='node' />
                <p className="">Node JS</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={express} alt='express' />
                <p className="">Express JS</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={php} alt='php' />
                <p className="">PHP</p>
              </div>
            </Col>
            <Col className="mb-4" xs={6} md={4} lg={3}>
              <div className="contact__home p-4 rounded-3 text-center">
                <img src={laravel} alt='laravel' />
                <p className="">Laravel</p>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;
