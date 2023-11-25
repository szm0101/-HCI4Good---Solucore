import React from "react";
import "./Data.css";
import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function Devices(props) {
  return (
    <body>
      <div class="devices">
        <h5>
          {`${
            props.buildingDevices ? props.buildingDevices.length : 0
          } Devices`}
        </h5>
      </div>
    </body>
  );
}

export default Devices;
