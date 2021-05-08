import React, {useEffect} from "react";
import { DataContent } from "../../content/visite-page/Lindos.data";
import "./Lindos.style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RuinImg from "../../../images/Lindos/Acropolis_Lindos_Rhodes_1.jpg";
import Castle from "../../../images/Lindos/96696276.jpg";
import FrontBeach from "../../../images/Lindos/Spiaggia-di-Lindos-Isola-di-Rodi.jpg";

const Content = () => {

  useEffect
  (() => {
    AOS.init({
      duration: 1000,
    });
  },
  []);
  

  return (
    <div>
      {DataContent.map((item) => {
        return (
          <>
            <div className="title-container">
              <Container>
                <Row>
                  <Col>
                    <h1 data-aos="fade-up" className="title-guide">{item.guideTitle}</h1>
                    <h5 data-aos="fade-up" className="sub-title-guide">{item.textTitle}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h3 data-aos="fade-up">{item.titleLindos}</h3>
                    <div data-aos="fade-up">{item.histoireLindos}</div>
                  </Col>
                  <Col>
                    <img data-aos="fade-up" className="image-ruin" src={RuinImg} alt="lindos" />
                  </Col>
                </Row>
              </Container>
            </div>
            <Container data-aos="fade-up" className="info-container" fluid>
              <Row className="info-black-background">
                <Col className="info-text">{item.infoContainer}</Col>
              </Row>
            </Container>
            <Container>
              <Row data-aos="fade-up" className="text-container">
                <Col>{item.textContent}</Col>
                <Col>{item.textContentTwo}</Col>
              </Row>
            </Container>
            <div>
              <Container>
                <Row data-aos="fade-up">
                  <Col>
                    <img className="image" src={Castle} alt="lindos" />
                  </Col>
                  <Col>
                    <img className="image" src={FrontBeach} alt="lindos" />
                  </Col>
                </Row>
                <Row data-aos="fade-up" className="section-visite">
                  <Col>
                    <h3 className="section-visite-title">{item.lastOneTitle}</h3>
                    <p>{item.lastOneText}</p>
                  </Col>
                  <Col>
                    <h3 className="section-visite-title">{item.lastTwoTitle}</h3>
                    <p>{item.lastTwoText}</p>
                  </Col>
                  <Col>
                    <h3 className="section-visite-title">{item.lastThreeTitle}</h3>
                    <p>{item.lastThreeText}</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Content;
