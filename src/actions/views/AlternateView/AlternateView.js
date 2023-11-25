import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./AlternateView.css";
import Logo from "../../assets/solutrak-logo.png";
import GeneralOpData from "./GeneralOpData";
import PerformanceData from "./PerformanceData";
import MaintenanceInfo from "./MaintenanceInfo";
import BuildingInfo from "./BuildingInfo";
import FaultInfo from "./FaultInfo";
import { useState, useEffect } from "react";
import TrafficInfo from "./TrafficInfo";
import Devices from "./Devices";
import ImpersonationDropDown from "../../components/ImpersonationDropdown/ImpersonationDropdown";

function AlternateView() {
  const [isOpen, setIsOpen] = useState(Array(7).fill(false));
  const [buildingDevices, setBuildingDevices] = useState(null);
  const [devicesNum, setDevicesNum] = useState(null);
  const [buildings, setBuildings] = useState([]);

  const toggle = (index) => {
    setIsOpen((prevIsOpen) =>
      prevIsOpen.map((item, i) => (i === index ? !item : item))
    );
  };

  const [cookies] = useCookies();

  useEffect(() => {
    var header = new Headers();
    header.append("Valid-token", cookies.token);
    console.log(cookies);

    var requestOptions = {
      method: "get",
      headers: header,
    };

    let buildings = [];
    const fetchBuildings = () => {
      fetch(
        `https://services.solucore.com/solutrak/api/buildings/getBuildingInfos`,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          json.Data.map((buildingInfo, idx) => (buildings[idx] = buildingInfo));
        })
        .catch((error) => console.log("API Error" + error));
    };

    fetchBuildings();
    setBuildings(buildings);
  }, [cookies.token]);

  return (
    <div className="wrapper">
      <div className="top-bar">
        <a href="/Home">
          <img src={Logo} alt="Solutrak logo" className="solutrak-logo"></img>
        </a>
        {cookies.userType === 'Admin' ? 
        <ImpersonationDropDown/> : null
        }
      </div>
      <div className="content">
        <table className="main-table">
          <tbody>
            <tr className="building-select">
              <table>
                <tbody>{<BuildingInfo buildings={buildings} setBuildingDevices={setBuildingDevices}/>}</tbody>
              </table>
            </tr>

            <tr className="data-tables" onClick={() => toggle(6)}>
              <td>Devices</td>
            </tr>
            {isOpen[6] ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<Devices buildingDevices={buildingDevices}/>}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(0)}>
              <td>General Operating Data</td>
            </tr>
            {isOpen[0] && buildingDevices ? (
              <tr>
                <table className="general-op-data">
                  {buildingDevices.map((device) => (
                    <tbody>{<GeneralOpData deviceId={device.deviceId} />}</tbody>
                  ))}
                </table>
              </tr>
            ) : null}

            <tr className="data-tables" onClick={() => toggle(1)}>
              <td>Performance Data</td>
            </tr>
            {isOpen[1] && buildingDevices ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<PerformanceData deviceId={buildingDevices[0].deviceId} />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(2)}>
              <td>Maintenance information</td>
            </tr>
            {isOpen[2] && buildingDevices ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<MaintenanceInfo deviceId={buildingDevices[0].deviceId} />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(3)}>
              <td>Fault information</td>
            </tr>
            {isOpen[3] && buildingDevices ? (
              <tr>
                <table className="fault-info-table">
                  {buildingDevices.map((device) => (
                    <tbody>
                      <span>Error per floor</span>
                      {<FaultInfo deviceId={device.deviceId} />}
                    </tbody>
                  ))}
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(4)}>
              <td>Traffic information</td>
            </tr>
            {isOpen[4] && buildingDevices ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<TrafficInfo />}</tbody>
                </table>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlternateView;
