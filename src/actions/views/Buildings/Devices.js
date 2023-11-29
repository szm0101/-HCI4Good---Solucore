import React from "react";
import { Table, Card, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import './Devices.css';

const Devices = () => {
  const location = useLocation();
  const banksData = location.state?.bankInfos || [];
  const devicesData = location.state?.deviceInfos || [];;
  console.log(devicesData);
  console.log(banksData);
//   const { buildingId } = useParams();

 // Output div for buildings list
 const outputDiv = (
  <div className="buildings-container d-flex align-items-center">
    <div className="rounded-table-wrapper">
        <Table className="buildings-table table-responsive">
          <thead>
            <tr className='table-card-record'> 
              <td className="back-button"> 
                <div className="d-flex ps-3">
                
                <Button as={Link} to="/Buildings" variant="secondary" style={{backgroundColor:'#42475e'}} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                  </Button>
                  <h4 className='ps-2 fw-bold '>Devices</h4>
                </div>
              </td>
              <td></td>
              
              <td></td>
              <td></td>
              <td></td> 
            </tr>
            <tr >
              <th className="text-start text-white-50 fs-5 ps-5">DEVICE NAME</th>
              <th className="text-start text-white-50 fs-5 ps-5">DEVICE ID</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {devicesData ? (
              devicesData.map((device) => (
                <tr key={device.id}>
                    <td className="text-white-50 fw-bold fs-5 ps-5">{device.deviceName}</td>
                  <td className="text-white-50 fw-bold fs-5 ps-5">{device.deviceId}</td>
                  <td className="text-white">View</td>
                  <td className="text-white">Edit</td>
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

export default Devices;
