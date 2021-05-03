import React, { useEffect } from "react";
import {
  DataFalirakiContentAnthony,
  DataFalirakiContentKalithea,
} from "../../content/visite-page/Faliraki.data";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AnthonyBeach from "../../../images/Faliraki/anthony-quinn-bay-beach.jpg";
import KalitheaBeach from "../../../images/Faliraki/kalithea-2-1024x640.jpg";
import KalitheaEntrance from "../../../images/Faliraki/t11.jpg";
import KalitheaNight from "../../../images/Faliraki/kallithea-springs-near-dawn-werner-dieterich.jpg";

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div>
      <div>
        {DataFalirakiContentAnthony.map((item) => {
          return (
            <>
              <div data-aos="fade-up" className="title-container">
                <Container>
                  <Row>
                    <Col>
                      <h5 className="sub-title-guide-anthony">
                        {item.subTitleAnthony}
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <div className="text-one-anthony">
                        {item.textOneAnthony}
                      </div>
                      <div className="space-anthony">{item.textTwoAnthony}</div>
                      <div className="space-anthony">
                        {item.textThreeAnthony}
                      </div>
                      <div className="space-anthony">
                        {item.textFourAnthony}
                      </div>
                    </Col>
                    <Col>
                      <img
                        className="image-ruin"
                        src={AnthonyBeach}
                        alt="lindos"
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          );
        })}
      </div>
      <div>
        {DataFalirakiContentKalithea.map((item) => {
          return (
            <>
              <div className="title-container-kalithea">
                <div className="kalithea-image">
                  <h3 className="kalithea-image-title">
                    {item.titleImageContainer}
                  </h3>
                </div>
                <Container>
                  <h5 className="sub-title-guide-anthony">
                    {item.subTitleKalithea}
                  </h5>
                  <Row>
                    <Col className="text-kalithea">
                      <div className="text-one-anthony">
                        {item.textOneKalithea}
                      </div>
                      <div className="space-anthony">
                        {item.textTwoKalithea}
                      </div>
                      <div className="space-anthony">
                        {item.textThreeeKalithea}
                      </div>
                      <div className="space-anthony">
                        {item.textFourKalithea}
                      </div>
                      <div className="space-anthony">
                        {item.textFiveKalithea}
                      </div>
                    </Col>
                    <Col>
                      <img
                        className="image-ruin"
                        src={KalitheaNight}
                        alt="kalithea-night"
                      />
                      <img
                        className="image-ruin"
                        src={KalitheaEntrance}
                        alt="kalithea-night"
                      />
                    </Col>
                  </Row>
                  <div className="image-end"><img className="image-end-shadow" src={KalitheaBeach} /></div>
                </Container>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
