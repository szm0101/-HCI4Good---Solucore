import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buildings.css';

const Buildings = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cookies, setCookie] = useCookies();
  const token = cookies.token;
  const banksData = [
    { id: 1, name: "Bank A", location: "City A" },
    { id: 2, name: "Bank B", location: "City B" },
    { id: 3, name: "Bank C", location: "City C" },
    // Add more sample data as needed
  ];


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
        <table className='table'>
        <thead>
          <tr className='text-white p-4'>
            <th>Buildings</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>

          <tr className="top-row">
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
                    <td className='text-white'>
                    <div>
            <button
              onClick={() => {
                const buildingId = building.buildingId;
                if (buildingId) {
                  navigate(`/Buildings/${buildingId}/Banks`, { state: { bankInfos: building.bankInfos, buildingName: building.buildingName } });
                }
              }}
            >
              View
            </button>
          </div>
                    </td>
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
        </table>
      </div>
    </div>
  );
};

export default Buildings;
