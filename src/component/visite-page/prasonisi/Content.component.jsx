import React, {useEffect} from "react";
import { ContentDataPrasonisi } from "../../content/visite-page/Prasonisi.data";
import "./Prasonisi.style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrasonisiImgOne from "../../../images/Prasonisi/17_Prasonisi_lighthouse_windsurf_kitesurf_action_800x368.jpg";
import PrasonisiImgTwo from "../../../images/Prasonisi/698.jpg";
import PrasonisiImgThree from "../../../images/Prasonisi/Rec_style_20.jpg";

const Content = () => {

    useEffect(() => {
        AOS.init({
          duration: 800,
        });
      }, []);

    return(
        <div>
        {ContentDataPrasonisi.map((item) => {
            return(
                <>
                    <div className="title-container">
                        <Container>
                            <Row data-aos="fade-up">
                                <Col>
                                    
                                    <hr className="separation-div" />
                                </Col>
                            </Row>
                            <Row className="text-img-container">
                                <Col className="text-prasonisi">
                                    <div data-aos="fade-up" className="title-prasonisi-text">{item.titlePrasonisi}</div>
                                    <div data-aos="fade-up">{item.textOnePrasonisi}</div>
                                    <div data-aos="fade-up">{item.textTwoPrasonisi}</div>
                                    <div data-aos="fade-up">{item.textThreePrasonisi}</div>
                                    <div data-aos="fade-up">{item.textFourPrasonisi}</div>
                                    <div data-aos="fade-up">{item.textFivePrasonisi}</div>
                                    <div data-aos="fade-up">{item.textSixPrasonisi}</div>
                                    <div data-aos="fade-up">{item.textSevenPrasonisi}</div>
                                </Col>
                                <Col className="img-prasonisi">
                                    <img data-aos="fade-up" src={PrasonisiImgOne} alt="" />
                                    <img data-aos="fade-up" src={PrasonisiImgTwo} alt="" />
                                    <img data-aos="fade-up" src={PrasonisiImgThree} alt="" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
            )
        })}
        </div>
    )
}

export default Content;