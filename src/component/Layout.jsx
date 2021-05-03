import React from "react";
import Navbar from "./navbar/Navbar.component";
import styled from "styled-components/macro";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      {children}
      <Footer>Developed and Designed by&nbsp;<a href="mailto:christophe.hadji@gmail.com">Christophe</a></Footer>
    </div>
  );
}


export const Footer = styled.footer`
  color: #000000;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  background-color: #ececec;
`;