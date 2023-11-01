import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./Data.css";

function FaultInfo(props) {
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

    const handleFaultInfo = () => {
      fetch(
        `https://services.solucore.com/solutrak/api/devicePerformances/getFaultLogs?deviceId=${urlParams.deviceId}&beginningDate=${urlParams.startDate}&endingDate=${urlParams.endDate}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => setData(json.Data))
        .catch((error) => console.log("API error" + error));
    };

    handleFaultInfo();
  }, []);

  return (
    <>
      
        <td>
          <table className="faultTable">
            <thead>
              <th>Floor</th>
              <th>Error</th>
              <th>Count</th>
            </thead>
            <tbody>
              {data ? (
                data.map((fault) => (
                  <tr>
                    <td>{fault.Floor}</td>
                    <td>{fault.Code + ": " + fault.Description}</td>
                    <td>{fault.FaultCount}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>Loading...</td>
                  <td>Loading...</td>
                  <td>Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </td>
      
    </>
  );
}

export default FaultInfo;
