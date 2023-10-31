import React, { useState, useEffect } from 'react';
import './Buildings.css';

// const sampleBuildings = [
//   {
//     name: 'Building A',
//     location: 'City X',
//   },
//   {
//     id: 2,
//     name: 'Building B',
//     location: 'City Y',
//     capacity: 150,
//     occupancy: 120,
//     floors: 7,
//   },
//   {
//     id: 3,
//     name: 'Building C',
//     location: 'City Z',
//     capacity: 200,
//     occupancy: 180,
//     floors: 10,
//   },
//   // Add more buildings as needed
//   // ...
// ];

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
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {data ? (
              data.map((building) => (
                <tr key={building.buildingId}>
                  <td>{building.buildingId}</td>
                  <td>{building.buildingName}</td>
                  <td>{building.buildingAddress}</td>
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
      {/* <div className="buildings-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Occupancy</th>
              <th>Floors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((building) => (
              <tr key={building.buildingID}>
                <td>{building.id}</td>
                <td>{building.name}</td>
                <td>{building.location}</td>
                <td>{building.capacity}</td>
                <td>{building.occupancy}</td>
                <td>{building.floors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Buildings;
