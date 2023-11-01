import React, { useEffect, useState }  from "react";
import './Data.css';
import { useCookies } from "react-cookie";

function GeneralOpData(props) {
  const [cookies] = useCookies();
  const [data, setData] = useState(null);
  useEffect(() => {
    var header = new Headers();
    header.append("Valid-token", cookies.token);

    //up count

    //down count

    //run count

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

  const parseDate = (date) => {
    const parsedDate = new Date(date);
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }

    var countData = new Array();
    return countData;
  }
  return (
    <>
      <tr>
        <td>
          <span>Run Count: </span>
          <table className="runTable">
            <thead>
              <th>Direction</th>
              <th>Count</th>
            </thead>
            <tbody>
              <tr>
                <td>Up</td>
                <td>{data ? (
                data.map((genderalOpData) => (
                  <tr>
                    <td>{genderalOpData.Devices}</td>
                    <td className="genderalOpDataDescription">{genderalOpData.Description}</td>
                  </tr>
                ))
              ) : (
                <td>Loading...</td>
              )}</td>
              </tr>
              <tr>
                <td>Down</td>
                <td>{data ? (
                data.map((genderalOpData) => (
                  <tr>
                    <td>{genderalOpData.Devices}</td>
                    <td className="genderalOpDataDescription">{genderalOpData.Description}</td>
                  </tr>
                ))
              ) : (
                <td>Loading...</td>
              )}</td>
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

export default GeneralOpData;
