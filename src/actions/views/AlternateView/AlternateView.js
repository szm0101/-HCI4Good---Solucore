import React from "react";
import "./AlternateView.css";
import Logo from "../../assets/solutrak-logo.png";
import GeneralOpData from "./GeneralOpData";
import PerformanceData from './PerformanceData';
import MaintenanceInfo from "./MaintenanceInfo";
import FaultInfo from './FaultInfo';
import { useState } from "react";
import TrafficInfo from "./TrafficInfo";

function AlternateView() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="wrapper">
      <div className="top-bar">
        <img src={Logo} alt="Solutrak logo" className="solutrak-logo"></img>
      </div>
      <div className="content">
        <table className="main-table">
          <tbody>
            <tr>
              <td>Building Details</td>
            </tr>
            <tr>
              <td>Building wheels</td>
            </tr>
            <tr className="data-tables" onClick={() => toggle()}>
              <td>General Operating Data</td>
            </tr>
            {isOpen ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{isOpen && <GeneralOpData />}</tbody>
                </table>
              </tr>
            ) : null}

            <tr className="data-tables">
              <td>Performance Data</td>
            </tr>
            {isOpen ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{isOpen && <PerformanceData />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables">
              <td>Maintenance information</td>
            </tr>
            {isOpen ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{isOpen && <MaintenanceInfo />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables">
              <td>Fault information</td>
            </tr>
            {isOpen ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{isOpen && <FaultInfo />}</tbody>
                </table>
              </tr>
            ) : null}
            <tr className="data-tables">
              <td>Traffic information</td>
            </tr>
            {isOpen ? (
              <tr>
                <table className="general-op-data">
                  <tbody>{isOpen && <TrafficInfo />}</tbody>
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
