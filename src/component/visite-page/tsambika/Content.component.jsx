import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Tsambika.style.css";
import { DataContentTsambika, DataContentTsambikaBeach } from "../../content/visite-page/Tsambika.data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TsambikaMonasteryOne from "../../../images/tsambika/IMG_5487.jpg";
import TsambikaMonasteryTwo from "../../../images/tsambika/IMG_5491.jpg";
import TsambikaMonasteryThree from "../../../images/tsambika/Old-Monastery--e1597806581645.jpg";
import TsambikaMonasteryFour from "../../../images/tsambika/water-beach.jpg";
import TsambikaMonasteryFive from "../../../images/tsambika/flag-tsambika.jpg";

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div>
      {DataContentTsambika.map((item) => {
        return (
          <>
            <div className="title-container">
              <Container>
                <Row>
                  <Col data-aos="fade-up">
                    <h1 className="title-guide">{item.titleTsambika}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-tsambika">
                    <div data-aos="fade-up">
                      {item.contantTitleTsambikaOne}
                    </div>
                    
                    <div data-aos="fade-up">
                      {item.contantTitleTsambikaTwo}
                    </div>
                    <div data-aos="fade-up">{item.contantTitleTsambikaThree}</div>
                    <div data-aos="fade-up">{item.contantTitleTsambikaFour}</div>
                    <hr data-aos="fade-up" className="separation-div" />
                    <div data-aos="fade-up">{item.contantTitleTsambikaFive}</div>
                    <div data-aos="fade-up">{item.contantTitleTsambikaSix}</div>
                    <div data-aos="fade-up">{item.contantTitleTsambikaSeven}</div>
                  </Col>
                  <Col className="img-tsambika">
                    <img data-aos="fade-up"  src={TsambikaMonasteryOne} alt="tsambika rhodes" />
                    <img data-aos="fade-up" src={TsambikaMonasteryTwo} alt="tsambika rhodes" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="monastery-tsambika">
                <img data-aos="fade-up" className="img-tsambika-monastery" src={TsambikaMonasteryThree} alt="monastery old" />
            </div>
            <hr data-aos="fade-up" className="separation-div" />
          </>
        );
      })}
      <div>
        {DataContentTsambikaBeach.map((item) => {
            return (
                <>
                <Container data-aos="fade-up">
                    <div className="tsambika-beach-container">
                        <h2 className="tsambika-beach-title">Plage de Tsambika</h2>
                    </div>
                </Container>
                <Container>
                    <Row data-aos="fade-up">
                        <Col>
                            <h1 className="title-beach">{item.TitleBeach}</h1>
                            <hr className="separation-div" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-tsambika-beach">
                            <div data-aos="fade-up">{item.TextOneBeach}</div>
                            <div data-aos="fade-up">{item.TextTwoBeach}</div>
                            <div data-aos="fade-up">{item.TextThreeBeach}</div>
                            <div data-aos="fade-up">{item.TextFourBeach}</div>
                            <div data-aos="fade-up">{item.TextFiveBeach}</div>
                            <div data-aos="fade-up">{item.TextSixBeach}</div>
                        </Col>
                        <Col className="img-tsambika-beach">
                            <img data-aos="fade-up" src={TsambikaMonasteryFour} alt="tsambika beach flag" />
                            <img data-aos="fade-up" src={TsambikaMonasteryFive} alt="tsambika beach flag" />
                        </Col>
                    </Row>
                </Container>
                </>
            )
        })}
      </div>
    </div>
  );
};

export default Content;
