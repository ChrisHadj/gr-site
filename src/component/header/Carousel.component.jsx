import React from "react";
import "./carouselStyle.css";
import Carousel from "react-bootstrap/Carousel";
import Photo1 from "../../images/carousel/carousel-1.jpg";
import Photo2 from "../../images/carousel/carousel-2.jpg";
import Photo3 from "../../images/carousel/carousel-3.jpg";
import Photo4 from "../../images/carousel/carousel-4.jpg";

class Carouselv extends React.Component {
  render() {
    return (
      <Carousel className="carousel-container" fade>
        <Carousel.Item>
          <img
            className=".d-none .d-md-block .d-lg-none img-fluid w-100"
            src={Photo1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=".d-none .d-md-block .d-lg-none w-100"
            src={Photo2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=".d-none .d-md-block .d-lg-none w-100"
            src={Photo3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=".d-none .d-md-block .d-lg-none w-100"
            src={Photo4}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carouselv;
