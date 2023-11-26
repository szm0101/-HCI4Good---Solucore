import React from "react";
import { Table, Card, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

const Devices = () => {
  const location = useLocation();
  const banksData = location.state?.bankInfos || [];
  const devicesData = location.state?.deviceInfos || [];;
  console.log(devicesData);
  console.log(banksData);
  const buildingName = location.state?.buildingName;
  const bankName = location.state?.bankName;
//   const { buildingId } = useParams();

  return (
    <div className="buildings-container">
      <Card className="banks-card mt-5" >
        <Card.Header>
          <div className="d-flex justify-content-start align-items-center">
            <div>
              <Button as={Link} to="/Buildings" variant="secondary" style={{backgroundColor:'#42475e'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                 <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
              </Button>
            </div>
            <div className="ms-3">
              <h5 className="mb-0 text-white fw-bold fs-3">Devices: {buildingName} &gt; {bankName}</h5>
            </div>
          </div>
      </Card.Header>
      <Card.Body className="buildings-table px-0 py-0">
        <Table className="table-dark">
          <thead>
            <tr >
              <th className="text-start text-white-50 fw-bold fs-5 ps-5">DEVICE NAME</th>
              <th className="text-start text-white-50 fw-bold fs-5 ps-5">DEVICE ID</th>
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
      </Card.Body>
    </Card>
    </div>
  );
};

export default Devices;
