import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./Data.css";

function GeneralOpData(props) {
  const [cookies] = useCookies();
  const [runCountData, setRunCountData] = useState(null);
  const [doorCycleData, setDoorCycleData] = useState(null);

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
        .then((json) => setRunCountData(json.Data))
        .catch((error) => console.log("API error" + error));
      return null;
    };

    const doorCycleData = () => {
      fetch(
        `https://services.solucore.com/solutrak/api/devicePerformances/getDoorCycleCounts?deviceId=${urlParams.deviceId}&beginningDate=${urlParams.startDate}&endingDate=${urlParams.endDate}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => setDoorCycleData(json.Data))
        .catch((error) => console.log("API error" + error));
      return null;
    };

    handleGeneralOpData();
    doorCycleData();
    // Promise.all([handleGeneralOpData(), doorCycleData()]).then(
    //   ([generalOpData, doorCycleData]) => {
    //     // Check if both API calls were successful before updating the state
    //     if (generalOpData !== null && doorCycleData !== null) {
    //       // Set the data state with the results of both API calls
    //       setData({ generalOpData, doorCycleData });
    //     }
    //   }
    // );
  }, [props.deviceId, cookies.token]);

  return (
    <>
      <td>
        <table className="runTable">
          <thead>
            <th>Direction</th>
            <th>Count</th>
          </thead>
          <tbody>
            {runCountData ? (
              runCountData.map((runCounts) => (
                <>
                  <tr>
                    <td>Up</td>
                    <td>{runCounts.Up}</td>
                  </tr>
                  <tr>
                    <td>Down</td>
                    <td>{runCounts.Down}</td>
                  </tr>
                </>
              ))
            ) : (
              <>
                <tr>
                  <td>Up</td>
                  <td>Loading...</td>
                </tr>
                <tr>
                  <td>Down</td>
                  <td>Loading...</td>
                </tr>
              </>
            )}
          </tbody>
        </table>

        <tr>
          <table className="doorCycleTable">
            <thead>
              <th colSpan={2}>Door Cycle(Front): </th>
            </thead>
            <tbody>
              {doorCycleData ? (
                doorCycleData.map((doorCycle) => (
                  <>
                    <tr>
                      <td>Door Open</td>
                      <td>{doorCycle.Open}</td>
                    </tr>
                    <tr>
                      <td>Door Close</td>
                      <td>{doorCycle.Close}</td>
                    </tr>
                    <tr>
                      <td>Nudging</td>
                      <td>{doorCycle.Nudging}</td>
                    </tr>
                    <tr>
                      <td>Reopen</td>
                      <td>{doorCycle.Reopen}</td>
                    </tr>
                  </>
                ))
              ) : (
                <>
                  <tr>
                    <td>Door Open</td>
                    <td>Loading...</td>
                  </tr>
                  <tr>
                    <td>Door Close</td>
                    <td>Loading...</td>
                  </tr>
                  <tr>
                    <td>Nudging</td>
                    <td>Loading...</td>
                  </tr>
                  <tr>
                    <td>Reopen</td>
                    <td>Loading...</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </tr>
      </td>
    </>
  );
}
export default GeneralOpData;
