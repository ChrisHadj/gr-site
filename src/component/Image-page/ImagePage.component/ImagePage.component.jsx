import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "../../Layout";

class ImagePage extends React.Component {
  
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <Layout>
        <div data-aos="fade-up">Helloooo!</div>

        <div>
          <h1>hello from h1</h1>
        </div>
      </Layout>
    );
  }
}

export default ImagePage;
