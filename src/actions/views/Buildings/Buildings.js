import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Table, Card, Button } from "react-bootstrap";
import { useLocation, Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './BuildingsTest.css';

const Buildings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const buildingName = location.state?.buildingName;
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

  const outputDiv = (
    <div className="buildings-container">
      <Card className="banks-card mt-5" >
        <Card.Header>
          <div className="d-flex justify-content-start align-items-center">
            <div className="ms-3">
              <h5 className="mb-0 text-white fw-bold fs-3">Building: {buildingName}</h5>
            </div>
          </div>
        </Card.Header>
        <Card.Body className="buildings-table px-0 py-0">
          <Table className="table-dark">
            <thead>
              <tr >
                <th className="text-start text-white-50 fw-bold fs-5 ps-5">BUILDING NAME</th>
                <th className="text-start text-white-50 fw-bold fs-5 ps-5">BUILDING ID</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((building) => (
                  <tr key={building.id}>
                      <td className="text-white-50 fw-bold fs-5 ps-5">{building.buildingName}</td>
                    <td className="text-white-50 fw-bold fs-5 ps-5">{building.location}</td>
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
        </Card.Body>
      </Card>
    </div>
);
  

  return (
    outputDiv
  );
};

export default Buildings;
