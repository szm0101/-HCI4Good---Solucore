import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import './Data.css';


function PerformanceData(props) {
  const [cookies] = useCookies();
  const [data, setData] = useState(null);

  useEffect(() => {
    var header = new Headers();
    header.append("Valid-token", cookies.token);

    var requestOptions = {
      method: "get",
      headers: header,
    };

    const currentDate = new Date();

    let startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - 10);

    startDate =
      startDate.getFullYear() +
      "-" +
      (startDate.getMonth() + 1) +
      "-" +
      startDate.getDate();

    let endDate =
      currentDate.getFullYear() +
      "-" +
      (currentDate.getMonth() + 1) +
      "-" +
      (currentDate.getDate());

    var urlParams = {
      deviceId: props.deviceId,
      startDate: startDate,
      endDate: endDate,
    };

    const handlePerformanceData = () => {
      fetch(
        `https://services.solucore.com/solutrak/api/devicePerformances/getDoorCycleCounts?deviceId=${urlParams.deviceId}&beginningDate=2${urlParams.startDate}&endingDate=${urlParams.endDate}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => setData(json.Data))
        .catch((error) => console.log("API error" + error));
    };

    handlePerformanceData();
  }, [props.deviceId, cookies.token]);



  return (
    <>
      <tr>
        <td>
          <table className="performanceTable">
            <tbody>
              <tr>
                <td>Average door open(s) actual/targe</td>
                <td>value</td>
              </tr>
              <tr>
                <td>Average door close(s) actual/targe</td>
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

      <tr>
        <td>
          <table className="doorCycleTable">
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
          {/* Need to change table name - width 100% */}
          <table className="tempTable">
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

export default PerformanceData;
