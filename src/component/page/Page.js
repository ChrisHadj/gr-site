import React from "react";
import Carousel from "../header/Carousel.component";
import Content from "../content/Content.component";
import Layout from "../Layout";
import Footer from '../footer/Footer.component'

class Pages extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ overflow: "hidden" }}>
          <Carousel />
          <div>
            <Footer />
          </div>
          <Content />
        </div>
      </Layout>
    );
  }
}

export default Pages;
