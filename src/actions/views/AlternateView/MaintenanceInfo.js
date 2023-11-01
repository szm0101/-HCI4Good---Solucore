import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./Data.css";

function MaintenanceInfo(props) {
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

    const handleMaintenanceInfo = () => {
      fetch(
        `https://services.solucore.com/solutrak/api/devicePerformances/getMaintenanceLogs?deviceId=${urlParams.deviceId}&beginningDate=${urlParams.startDate}&endingDate=${urlParams.endDate}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((json) => setData(json.Data))
        .catch((error) => console.log("API error" + error));
    };

    handleMaintenanceInfo();
  }, [props.deviceId, cookies.token]);

  const parseDate = (date) => {
    const parsedDate = new Date(date);
    const options = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }

    const formattedDate = new Intl.DateTimeFormat('en-us', options).format(parsedDate);
    return formattedDate;
  }

  return (
    <>
      <tr>
        <td>
          <table className="maitenanceTable">
            <thead>
              <th>Date</th>
              <th>Car</th>
              <th>Description</th>
            </thead>
            <tbody>
              {data ? (
                data.map((maintenanceInfo) => (
                  <tr>
                    <td>{parseDate(maintenanceInfo.Date)}</td>
                    <td>{maintenanceInfo.Devices}</td>
                    <td className="maintenanceDescription">{maintenanceInfo.Description}</td>
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
      </tr>
    </>
  );
}

export default MaintenanceInfo;
