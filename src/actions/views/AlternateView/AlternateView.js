import React from "react";
import "./AlternateView.css";
import Logo from "../../assets/solutrak-logo.png";
import GeneralOpData from "./GeneralOpData";
import PerformanceData from './PerformanceData';
import MaintenanceInfo from "./MaintenanceInfo";
import BuildingInfo from "./BuildingInfo";
import FaultInfo from './FaultInfo';
import { useState } from "react";
import TrafficInfo from "./TrafficInfo";
import Devices from "./Devices";

function AlternateView() {
  const [isOpen, setIsOpen] = useState(Array(7).fill(false));

  const toggle = (index) => {
    setIsOpen(prevIsOpen => prevIsOpen.map((item, i) => i === index ? !item : item))
  };
  return (
    <div className="wrapper">
      <div className="top-bar">
        <img src={Logo} alt="Solutrak logo" className="solutrak-logo"></img>
      </div>
      <div className="content">
        <table className="main-table">
          <tbody>
            <tr className="data-tables" onClick={() => toggle(5)}>
              <td>Building Details</td>
            </tr>
            {isOpen[5] ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<BuildingInfo />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(6)}>
              <td>Devices</td>
            </tr>
            {isOpen[6] ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<Devices />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(0)}>
              <td>General Operating Data</td>
            </tr>
            {isOpen[0] ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<GeneralOpData />}</tbody>
                </table>
              </tr>
            ) : null}

            <tr className="data-tables" onClick={() => toggle(1)}>
              <td>Performance Data</td>
            </tr>
            {isOpen[1] ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<PerformanceData />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(2)}>
              <td>Maintenance information</td>
            </tr>
            {isOpen[2] ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<MaintenanceInfo />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(3)}>
              <td>Fault information</td>
            </tr>
            {isOpen[3] ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{<FaultInfo />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables" onClick={() => toggle(4)}>
              <td>Traffic information</td>
            </tr>
            {isOpen[4] ? (
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
