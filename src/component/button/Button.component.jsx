import React from "react";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Button.css";

const ButtonDanger = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Visite
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">lindos</Dropdown.Item>
        <Dropdown.Item href="#/action-2">faliraki</Dropdown.Item>
        <Dropdown.Item href="#/action-3">rhodes</Dropdown.Item>
        <Dropdown.Item href="#/action-3">tsambika</Dropdown.Item>
        <Dropdown.Item href="#/action-3">tsambika</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ButtonDanger;
