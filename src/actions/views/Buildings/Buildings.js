import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Table } from 'react-bootstrap';
import './Buildings.css';

const Buildings = () => {
  const [data, setData] = useState([]);
  const [cookies, setCookie] = useCookies();
  const token = cookies.token;


  useEffect(() => {
    
    const headers = new Headers({
      'Valid-token': token,
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

        <tbody className='building-table-body'>
              {data ? (
                data.map((building) => (
                  <tr key={building.buildingId}>
                    <td className='text-white'>{building.buildingName}</td>
                    <td className='text-white'>{building.city}</td>
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
