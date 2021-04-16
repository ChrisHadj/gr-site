import React, { useEffect } from "react";
import { DataTitle } from "./Accordion.data";
import styled from "styled-components/macro";
import AOS from "aos";
import "aos/dist/aos.css";

const AccordionSection = styled.div``;
const Titlecontainer = styled.div``;
const Title = styled.div``;
const TitleUl = styled.div``;
const TitleInfo = styled.div``;
const TitleInfoOne = styled.div``;

const Accordion = () => {

  useEffect
    (() => {
      AOS.init({
        duration: 1500,
      });
    },
    []);


  return (
    <AccordionSection>
      {DataTitle.map((item, index) => {
        return (
          <>
            <Titlecontainer data-aos="fade-right" id="covid-container">
              <Title>{item.title}</Title>
              <TitleUl>{item.titlelione}</TitleUl>
            </Titlecontainer>
            <TitleInfo data-aos="fade-left">{item.titleinfo}</TitleInfo>
            <TitleInfoOne data-aos="fade-right">{item.titleinfoone}</TitleInfoOne>
          </>
        );
      })}
    </AccordionSection>
  );
};

export default Accordion;
