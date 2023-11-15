import React from "react";
import "./Data.css";
import { useState, useEffect } from "react";
import { useRef } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function BuildingInfo(props) {
  const [building, setBuilding] = useState("-- Select Building --");
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setDropDownOpen(!dropDownOpen);
  };

  useEffect(() => {
    if (dropDownOpen && dropdownRef.current) {
      const dropdownMenu = dropdownRef.current.querySelector(".dropdown-menu");
      if (dropdownMenu) {
        const dropdownMenuHeight = dropdownMenu.clientHeight;
        dropdownRef.current.style.height = `${dropdownMenuHeight}px`;
      }
    } else {
      dropdownRef.current.style.height = "auto";
    }
  }, [dropDownOpen]);

  return (
    <div class="buildingInfo" ref={dropdownRef}>
      <Dropdown show={dropDownOpen} onToggle={handleToggle}>
        <Dropdown.Toggle id="dropdown-basic">
          {building}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {props.buildings.map((building, idx) => (
            <Dropdown.Item onClick={() => setBuilding(building)}>
              {building.buildingName}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      {building !== "-- Select Building --" ? (
        <div>
          <h4>{building.buildingName}</h4>
          <h4>{`${building.bankInfos[0].deviceInfos.length} - Devices`}</h4>
        </div>
      ) : null}
    </div>
  );
}

export default BuildingInfo;
