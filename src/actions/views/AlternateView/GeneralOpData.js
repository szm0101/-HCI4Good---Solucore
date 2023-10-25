import React from "react";
import './Data.css';

function GeneralOpData() {
  return (
    <>
      <tr>
        <td>
          <span>Run Count: </span>
          <table className="table">
            <thead>
              <th>Direction</th>
              <th>Count</th>
            </thead>
            <tbody>
              <tr>
                <td>Up</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Down</td>
                <td>value</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="table">
            <thead>
              <th colSpan={2}>Door Cycle(Front): </th>
            </thead>
            <tbody>
              <tr>
                <td>Up</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Door Open</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Door Close</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Nudging</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Reopen</td>
                <td>value</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="table">
            <thead>
              <th colSpan={2}>Control Temperature Max: </th>
            </thead>
            <tbody>
              <tr>
                <td>...</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>value</td>
              </tr>
              <tr>
                <td>...</td>
                <td>value</td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}

export default GeneralOpData;
