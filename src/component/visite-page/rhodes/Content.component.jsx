import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  DataContentRhodes,
  DataContentColosse,
  DataContentOldTown,
} from "../../content/visite-page/Rhodes.data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RhodesCastle from "../../../images/Rhodes/the_palace_of_the_grand_master.jpg";
import RhodesCastleByNight from "../../../images/Rhodes/Rhodes-by-night.jpg";
import RhodesColosse from "../../../images/Rhodes/colosse_rhodes.jpg";
import RhodesOldTownOne from "../../../images/Rhodes/palia-poli-02.jpg";
import RhodesOldTownTwo from "../../../images/Rhodes/Rhodes-by-night-two.jpg";

const Content = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <div>
      {DataContentRhodes.map((item) => {
        return (
          <>
            <div className="title-container">
              <Container>
                <Row>
                  <Col data-aos="fade-up">
                    <h1 className="title-guide">{item.titleRhodes}</h1>
                    <h5 className="sub-title-guide">{item.subTitleRhodes}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col data-aos="fade-up">
                    <div className="first-text-rhodes">{item.historyOne}</div>
                    <div className="two-text-rhodes">{item.historyTwo}</div>
                    <div>{item.historyThree}</div>
                  </Col>
                  <Col data-aos="fade-up">
                    <img src={RhodesCastle} alt="Rhodes castle" />
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="image-rhodes-night">
              <img data-aos="fade-up" src={RhodesCastleByNight} alt="Rhodes castle by night" />
            </div>
            <hr className="separation-div" />
          </>
        );
      })}
      <div>
        {DataContentColosse.map((item) => {
          return (
            <>
              <Container>
                <div data-aos="fade-up" className="colosse-container">
                  <h2 className="hero-title-colosse">Colosse de Rhodes</h2>
                </div>
              </Container>
              <Container>
                <Row>
                  <Col data-aos="fade-up">
                    <h1 className="title-colosse">{item.titleColosse}</h1>
                    <hr className="separation-div" />
                  </Col>
                </Row>
                <Row>
                  <Col className="text-rhodes-space">
                    <div data-aos="fade-up">{item.textOneColosse}</div>
                    <div data-aos="fade-up">{item.textTwoColosse}</div>
                    <div data-aos="fade-up">{item.textThreeColosse}</div>
                    <div data-aos="fade-up">{item.textFourColosse}</div>
                    <div data-aos="fade-up" className="first-text-rhodes-last">
                      {item.textFiveColosse}
                    </div>
                  </Col>
                  <Col>
                    <img data-aos="fade-up"
                      className="image-colosse"
                      src={RhodesColosse}
                      alt="colosse rhodes"
                    />
                  </Col>
                </Row>
              </Container>
              <hr className="separation-div" />
            </>
          );
        })}
      </div>
      <div>
        {DataContentOldTown.map((item) => {
          return (
            <>
              <Container data-aos="fade-up">
                <div className="oldtown-container">
                  <h2 className="title-old-town">Vieille ville</h2>
                </div>
              </Container>
              <Container>
                <Row>
                  <Col data-aos="fade-up" className="colosse-container-title">
                    <h1 className="title-colosse">
                      {item.titleOldTown}
                      <hr className="separation-div" />
                    </h1>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col className="text-old-town-space">
                    <div data-aos="fade-up">{item.textOneTown}</div>
                    <div data-aos="fade-up">{item.textTwoTown}</div>
                    <div data-aos="fade-up">{item.textThreeTown}</div>
                    <div data-aos="fade-up">{item.textThreeTown}</div>
                    <div data-aos="fade-up">{item.textThreeTown}</div>
                  </Col>
                  <Col data-aos="fade-up">
                    <div className="title-list-rhodes">{item.titleAVoir}</div>
                    <div className="list-text-rhodes-town">{item.AVoir}</div>
                  </Col>
                </Row>
                <Row className="last-container-rhodes">
                  <Col data-aos="fade-up">
                    <img src={RhodesOldTownOne} alt="rhodes old town" />
                  </Col>
                  <Col data-aos="fade-up">
                    <img src={RhodesOldTownTwo} alt="rhodes old town" />
                  </Col>
                </Row>
              </Container>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
