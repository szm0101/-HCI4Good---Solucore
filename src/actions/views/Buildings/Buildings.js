import React from 'react';
import './Buildings.css';

const sampleBuildings = [
  {
    id: 1,
    name: 'Building A',
    location: 'City X',
    capacity: 100,
    occupancy: 80,
    floors: 5,
  },
  {
    id: 2,
    name: 'Building B',
    location: 'City Y',
    capacity: 150,
    occupancy: 120,
    floors: 7,
  },
  {
    id: 3,
    name: 'Building C',
    location: 'City Z',
    capacity: 200,
    occupancy: 180,
    floors: 10,
  },
  // Add more buildings as needed
  // ...
];

const Buildings = () => {
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
              <th>Capacity</th>
              <th>Occupancy</th>
              <th>Floors</th>
            </tr>
          </thead>
          <tbody>
            {sampleBuildings.map((building) => (
              <tr key={building.id}>
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
      </div>
      <div className="buildings-table">
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
            {sampleBuildings.map((building) => (
              <tr key={building.id}>
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
      </div>
    </div>
  );
};

export default Buildings;
