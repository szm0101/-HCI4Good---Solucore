import React, { useState, useEffect } from 'react';
import './Buildings.css';

const Buildings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userToken = '0b13be5e-5947-4c2a-a95b-2898773f50cc';

    const headers = new Headers({
      'Valid-token': userToken,
    });

    fetch('https://services.solucore.com/solutrak/api/buildings/getBuildingInfos', {"method": "GET",headers})
      .then((response) => response.json())
      .then((result) => {
        setData(result.Data);
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  }, []);
  

  return (
    <div className="buildings-container">
      <h1>Buildings</h1>
      <div className="buildings-table">
        <table>
          <thead>
            <tr>
              <th>BUILDING NAME</th>
              <th>LOCATION</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((building) => (
                <tr key={building.buildingId}>
                  <td>{building.buildingName}</td>
                  <td>{building.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Buildings;
