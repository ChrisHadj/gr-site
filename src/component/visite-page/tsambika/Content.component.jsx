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
                  <Col>
                    <h1 className="title-guide">{item.titleTsambika}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-tsambika">
                    <div>
                      {item.contantTitleTsambikaOne}
                    </div>
                    <div>
                      {item.contantTitleTsambikaTwo}
                    </div>
                    <div>{item.contantTitleTsambikaThree}</div>
                    <div>{item.contantTitleTsambikaFour}</div>
                    <hr className="separation-div" />
                    <div>{item.contantTitleTsambikaFive}</div>
                    <div>{item.contantTitleTsambikaSix}</div>
                    <div>{item.contantTitleTsambikaSeven}</div>
                  </Col>
                  <Col className="img-tsambika">
                    <img src={TsambikaMonasteryOne} alt="tsambika rhodes" />
                    <img src={TsambikaMonasteryTwo} alt="tsambika rhodes" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="monastery-tsambika">
                <img className="img-tsambika-monastery" src={TsambikaMonasteryThree} alt="monastery old" />
            </div>
            <hr className="separation-div" />
          </>
        );
      })}
      <div>
        {DataContentTsambikaBeach.map((item) => {
            return (
                <>
                <Container>
                    <div className="tsambika-beach-container">
                        <h2 className="tsambika-beach-title">Plage de Tsambika</h2>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="title-beach">{item.TitleBeach}</h1>
                            <hr className="separation-div" />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-tsambika-beach">
                            <div>{item.TextOneBeach}</div>
                            <div>{item.TextTwoBeach}</div>
                            <div>{item.TextThreeBeach}</div>
                            <div>{item.TextFourBeach}</div>
                            <div>{item.TextFiveBeach}</div>
                            <div>{item.TextSixBeach}</div>
                        </Col>
                        <Col className="img-tsambika-beach">
                            <img src={TsambikaMonasteryFour} alt="tsambika beach flag" />
                            <img src={TsambikaMonasteryFive} alt="tsambika beach flag" />
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
