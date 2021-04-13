import React, {useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import AOS from "aos";
import 'aos/dist/aos.css';



class ImagePage extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    AOS.init({
      duration : 2000
    })
  }
  render(){
    return(
      <div data-aos='fade-up'>
        Helloooo!
      </div>
    )
  }
};

export default ImagePage;
