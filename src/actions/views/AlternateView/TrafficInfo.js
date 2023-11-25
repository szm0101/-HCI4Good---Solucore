import React from "react";
import "./Data.css";

function TrafficInfo() {
  //Data is not available through Postman 
  //Table remains empty
  return (
    <>
      <tr>
        <td>
          <span>Most used floor: </span>
          <table className="trafficTable">
            <thead>
              <th>Floor</th>
              <th>Number of stops</th>
            </thead>
            <tbody>
              <tr>
                <td>value</td>
                <td>value</td>
              </tr>
              <tr>
                <td>value</td>
                <td>value</td>
              </tr>
              <tr>
                <td>value</td>
                <td>value</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <span>Estimated building density: </span>
          <table className="densityTable">
            <thead>
              <th>Floor</th>
              <th>Going in</th>
              <th>Getting out</th>
            </thead>
            <tbody>
              <tr>
                <td>value</td>
                <td>value</td>
                <td>value</td>
              </tr>
              <tr>
                <td>value</td>
                <td>value</td>
                <td>value</td>
              </tr>
              <tr>
                <td>value</td>
                <td>value</td>
                <td>value</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

export default TrafficInfo;
