import React, { useState } from "react";
import { Data, DataTitle } from "./Accordion.data";
import styled from "styled-components/macro";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";



const Container = styled.div``;
const AccordionSection = styled.div``;
const Wrap = styled.div``;
const Dropdown = styled.div``;

const AccordionDrop = () => {
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
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.titleAccordion}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    );
  };
  
  export default AccordionDrop;
  