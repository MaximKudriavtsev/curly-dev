import React, { useContext, useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-scroll';

import Form from './Form';
import PortfolioContext from '../../context/context';
// service_t0eo26r
const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, subtitle } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
              <h1 className="hero-title">{title}</h1>
            </Fade>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <h2 className="hero-subtitle">{subtitle}</h2>
            </Fade>

            <br />

            {/* <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
              <p className="hero-cta">
                <span className="cta-btn cta-btn--hero">
                  <Link to="about" smooth duration={1000}>
                    {cta}
                  </Link>
                </span>
              </p>
            </Fade> */}
          </Col>

          <Col md={6} sm={12}>
            <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={1500} distance="30px">
              <Form />
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Header;
