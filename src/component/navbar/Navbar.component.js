import React, { useState, useEffect } from "react";
import styled from "styled-components/macro"
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import Logo from "../../images/home.svg";

const Navbarv = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY)
      if (window.scrollY >= 66) {
        setNavbar(true)
      } else {
        setNavbar(false)
      }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <PrimaryNav className={navbar ? "navbar active" : "navbar"}>
    <div><a href="/"><ImageLogo src={Logo}/></a></div>
      <NavList>
          <a href="/lindos">Lindos</a>
          <a href="/tsambika">Tsambika</a>
          <a href="/rhodes">Rhodes</a>
          <a href="/faliraki">Faliraki</a>
          <a href="/prasonisi">Prasonisi</a>
      </NavList>
      <CustomeMenu onClick={() => setBurgerOpen(true)} />
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CustomeClose onClick={() => setBurgerOpen(false)} />
        </CloseWrapper>
          <li>
          <a href="/lindos">Lindos</a>
          </li>
          <li>
          <a href="/tsambika">Tsambika</a>
          </li>
          <li>
          <a href="/rhodes">Rhodes</a>
          </li>
          <li>
          <a href="/faliraki">Faliraki</a>
          </li>
          <li>
          <a href="/prasonisi">Prasonisi</a>
          </li>
      </BurgerNav>
    </PrimaryNav>
  );
};

export default Navbarv;

const PrimaryNav = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
`;

const NavList = styled.div`
  display: flex;
  font-size: 1.2rem;
  list-style: none;
  width: 45%;
  margin-left: auto;
  justify-content: space-around;
  align-items: center;
  height: 75px;
  @media (max-width: 768px) {
    display: none;
  }

  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: black;
    font-weight: 600;

    :hover {
      text-decoration: none;
      color: black;
    }

    :before {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: black;
      transform-origin: bottom right;
      transition: transform 0.5s ease-out;
    }

    :hover::before {
      transform: scaleX(1);
      transform-origin: bottom left;
      
    }
  }
  @media screen and (max-width: 960px) {
  }

  @media (max-width: 765px) {
    display: none;
  }
`;

const NavLi = styled.div`
  justify-content: space-between;
  margin-left: 25px;
  margin-right: 3px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 200px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translate(100%)")};
  transition: transform 0.3s;
  

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.329);

    a {
      font-weight: 600;
      color: #000000;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  
`;

const CustomeClose = styled(CloseIcon)`
  cursor: pointer;
  margin-right: 15px;
`;

const CustomeMenu = styled(MenuIcon)`
  cursor: pointer;
  color: white;
  display: none !important;
  margin-right: 15px;

  @media (max-width: 768px) {
    display: flex !important;
    position: absolute;
    top: 0.7em;
    right: 0.7em;
  }
`;

const ImageLogo = styled.img`
  margin-bottom: 13px;
    margin-left: 5px;
    height: 46px;

    @media (max-width: 768px) {
      margin-bottom: 1px;
  }
`;