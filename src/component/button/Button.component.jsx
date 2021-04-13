import React from "react";
import Button from "react-bootstrap/Button";
import "./Button.css";

const ButtonDanger = () => {
  return (
    <>
      <Button className="button-covid" variant="danger" href="#covid-container">Covid19</Button>
    </>
  );
};

export default ButtonDanger;