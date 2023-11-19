import React from "react";
import "./Data.css";
import { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

function BuildingInfo(props) {
  const [building, setBuilding] = useState(null);
  const [dropDownOpen, setDropDownOpen] = useState(false);

  console.log(props.buildings);

  const handleBuildingSelect = (building) => {
    console.log(building);
    setBuilding(building);
    props.setBuildingDevices(building.bankInfos[0].deviceInfos);
  };

  return (
    <div className="buildingInfoContainer">
      <div
        className="buildingInfo"
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        {building ? (
          <div className="selected-building">
            <div className="selected-building-name">
              <h3>
                <strong>{building.buildingName}</strong>
              </h3>
            </div>
            <div className="selected-building-info">
              <h5>
                {`${building.bankInfos[0].deviceInfos.length} Devices`}
              </h5>
              <h5>-</h5>
              <h5>
                  <strong>{`${building.bankInfos[0].deviceInfos[0].contractor}`}</strong>
              </h5>
            </div>
          </div>
        ) : 
        <div>
          <h3><strong>No building selected</strong></h3>
        </div>
        }
      </div>

      <div className="dropdown-container">
        <DropdownButton
          title="-- Select-Building --"
          onClick={() => setDropDownOpen(!dropDownOpen)}
          className="dropdown-button"
          drop="right"
        >
          {props.buildings.map((building, idx) => (
            <Dropdown.Item
              key={idx}
              onClick={() => handleBuildingSelect(building)}
              className="dropdown-item"
            >
              {building.buildingName}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    </div>
  );
}

export default BuildingInfo;