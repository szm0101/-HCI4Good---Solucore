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
            {data ? (
                data.map((PerformanceData) => (
                  <tr>
                    <td>Average door open(s) actual/target</td>
                    <td>{PerformanceData.Date}</td> 
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Average door open(s) actual/target</td>
                  <td>Loading...</td>
                </tr>
              )}
             
             {data ? (
                data.map((PerformanceData) => (
                  <tr>
                    <td>Average door close(s) actual/target</td>
                    <td>{PerformanceData.Date}</td> 
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Average door close(s) actual/target</td>
                  <td>Loading...</td>
                </tr>
              )}
             
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
