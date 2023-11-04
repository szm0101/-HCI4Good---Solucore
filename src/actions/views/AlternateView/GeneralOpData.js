import React, { useEffect, useState }  from "react";
import { useCookies } from "react-cookie";
import './Data.css';

function GeneralOpData(props) {
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
      currentDate.getDate();

    var urlParams = {
      deviceId: props.deviceId,
      startDate: startDate,
      endDate: endDate,
    };

    const handleGeneralOpData = () => {
      fetch(
        `https://services.solucore.com/solutrak/api/devicePerformances/getRunCounts?deviceId=${urlParams.deviceId}&beginningDate=${urlParams.startDate}&endingDate=${urlParams.endDate}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => setData(json.Data))
        .catch((error) => console.log("API error" + error));
    };

    handleGeneralOpData();
  }, [props.deviceId, cookies.token]);
  
  return (
    <>
        <td>
          <span>Run Count: </span>
          <table className="runTable">
            <thead>
              <th>Direction</th>
              <th>Count</th>
            </thead>
            <tbody>
            {data ? (
                data.map((runCounts) => (
                  <tr>
                    <td>{"Up : "+ runCounts.Up}</td>
                    <td>{"Down : "+ runCounts.Down }</td>
                  </tr>
                ))
              ) : (
                <tr>
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
export default GeneralOpData;
