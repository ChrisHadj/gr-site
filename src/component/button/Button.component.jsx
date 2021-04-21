import React from "react";

import Dropdown from 'react-bootstrap/Dropdown'
import "./Button.css";

const ButtonDanger = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Visite
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Link href="/lindos">lindos</Dropdown.Link>
        <Dropdown.Item href="#/action-2">faliraki</Dropdown.Item>
        <Dropdown.Item href="#/action-3">rhodes</Dropdown.Item>
        <Dropdown.Item href="#/action-3">tsambika</Dropdown.Item>
        <Dropdown.Item href="#/action-3">tsambika</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ButtonDanger;
