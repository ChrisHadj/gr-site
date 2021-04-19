import React from "react";
import Carousel from "../header/Carousel.component";
import Layout from "../Layout";
import Footer from "../footer/Footer.component";
import CovidAccordion from "../content/Covid.accordion";

class Pages extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ overflow: "hidden" }}>
          <Carousel />
          <div>
            <Footer />
          </div>
          <CovidAccordion />
        </div>
      </Layout>
    );
  }
}

export default Pages;
