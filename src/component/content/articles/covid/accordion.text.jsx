import React, { useState } from "react";
import { Data, DataTitle } from "./Accordion.data";
import styled from "styled-components/macro";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div``;
const Container = styled.div``;
const Wrap = styled.div``;
const Dropdown = styled.div``;
const Titlecontainer = styled.div``;
const Title = styled.div``;
const TitleUl = styled.div``;
const TitleInfo = styled.div``;
const TitleInfoOne = styled.div``;
const TitleHOne = styled.h1``;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#020081", size: "25px" }}>
      <AccordionSection>
        {DataTitle.map((item, index) => {
          return (
            <>
              <Titlecontainer>
                <Title>{item.title}</Title>
                <TitleUl>{item.titlelione}</TitleUl>
              </Titlecontainer>
              <TitleInfo>{item.titleinfo}</TitleInfo>
              <TitleInfoOne>{item.titleinfoone}</TitleInfoOne>
            </>
          );
        })}
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
