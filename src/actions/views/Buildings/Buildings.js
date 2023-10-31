import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import './Buildings.css';

const Buildings = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const userToken = '0b13be5e-5947-4c2a-a95b-2898773f50cc';

    const headers = new Headers({
      'Valid-token': userToken,
    });

    // call getBuildingInfos API and store Data array
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
      <div className="buildings-table">
   
        <Table className='table'>
        <thead>
        <div className='text-white p-4'>Buildings</div>
          <tr>
            <th>BUILDING NAME</th>
            <th>LOCATION</th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody >
              {data ? (
                data.map((building) => (
                  <tr key={building.buildingId}>
                    <td className=''>{building.buildingName}</td>
                    <td className='text-white p-4'>{building.city}</td>
                    <td className='text-white'>View</td>
                    <td className='text-white'>Edit</td>
                    <td className='text-white'>Delete</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Loading...</td>
                </tr>
              )}
        </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Buildings;
