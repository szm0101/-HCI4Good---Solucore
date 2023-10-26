import React from "react";
import './Data.css';

function PerformanceData() {
  return (
    <>
      <tr>
        <td>
          <table className="performanceTable">
            <tbody>
              <tr>
                <td>Average door open(s) actual/target</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Average door close(s) actual/target</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Floor with slowest door close</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Floor with slowest door open</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Acceleration rate</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Jerk rate</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Maximum speed up</td>
                <td>value</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

export default PerformanceData;
