import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Table, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Buildings.css';

const Buildings = () => {
  const navigate = useNavigate();
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
  
  // Output div for buildings list
  const outputDiv = (
    <div className="buildings-container d-flex align-items-center">
      <div className="rounded-table-wrapper">
          <Table className="buildings-table table-responsive">
            <thead>
              <tr className='table-card-record'> 
                <td className='text-start ps-4'>
                  <h4 className='ps-5 fw-bold'>Buildings</h4>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td> 
              </tr>
              <tr >
                <th className="text-start text-white-50 fs-5 ps-5">BUILDING NAME</th>
                <th className="text-start text-white-50 fs-5 ps-5">LOCATION</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((building) => (
                  <tr key={building.id}>
                    <td className="text-white ps-5">{building.buildingName}</td>
                    <td className="text-white ps-5">{building.city}</td>
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
                    </td>                  <td className="text-white">Edit</td>
                    <td className="text-white">Delete</td>
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
  
  return (
    outputDiv
  );
};

export default Buildings;
