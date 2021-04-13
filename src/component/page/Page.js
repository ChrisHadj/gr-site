import React from "react";
import Navbar from "../navbar/Navbar.component";
import Carousel from "../header/Carousel.component";
import Content from "../content/Content.component";

class Pages extends React.Component {
  render() {
    return (
      <div style={{overflow: "hidden"}}>
        <Navbar />
        <Carousel />
        <Content />
      </div>
    );
  }
};

export default Pages;
