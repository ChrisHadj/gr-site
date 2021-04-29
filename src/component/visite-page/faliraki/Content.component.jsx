import React, {useEffect} from "react";
import { DataFalirakiContent } from "../../content/visite-page/Faliraki.data";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnthonyBeach from "../../../images/Faliraki/anthony-quinn-bay-beach.jpg"
import KalitheaBeach from "../../../images/Faliraki/kalithea-2-1024x640.jpg"
import KalitheaEntrance from "../../../images/Faliraki/t11.jpg"
import KalitheaLand from "../../../images/Faliraki/Kallithea land.jpeg"


const Content = () => {

  useEffect
  (() => {
    AOS.init({
      duration: 800,
    });
  },
  []);

  return (
    <div>
      {DataFalirakiContent.map((item) => {
        return (
          <>
            <div data-aos="fade-up" className="title-container">
              <Container>
                <Row>
                  <Col>
                    <h1 className="title-guide">{item.titleAnthonyContainer}</h1>
                    <h5 className="sub-title-guide-anthony">{item.subTitleAnthony}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-one-anthony">{item.textOneAnthony}</div>
                    <div className="space-anthony"></div>
                    <div>{item.textTwoAnthony}</div>
                    <div className="space-anthony"></div>
                    <div>{item.textThreeAnthony}</div>
                    <div className="space-anthony"></div>
                    <div>{item.textFourAnthony}</div>
                  </Col>
                  <Col>
                    <img className="image-ruin" src={AnthonyBeach} alt="lindos" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div>
              <img className="kalithea-terme" src={KalitheaLand} alt="kallithéa" />
            </div>
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
                    <img className="image" src={KalitheaBeach} alt="lindos" />
                  </Col>
                  <Col>
                    <img className="image" src={KalitheaEntrance} alt="lindos" />
                  </Col>
                </Row>
                <Row data-aos="fade-up" className="section-visite">
                  <Col>
                    <h3 className="section-visite-title">
                      {item.lastOneTitle}
                    </h3>
                    <p>{item.lastOneText}</p>
                  </Col>
                  <Col>
                    <h3 className="section-visite-title">
                      {item.lastTwoTitle}
                    </h3>
                    <p>{item.lastTwoText}</p>
                  </Col>
                  <Col>
                    <h3 className="section-visite-title">
                      {item.lastThreeTitle}
                    </h3>
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
