import React from "react";
import { Table, Card, Button } from "react-bootstrap";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";

const Banks = () => {
  const { buildingId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const banksData = location.state?.bankInfos || [];
  const buildingName = location.state?.buildingName;

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
                <th className="text-start text-white-50 fs-5 ps-5">BANK NAME</th>
                <th className="text-start text-white-50 fs-5 ps-5">BANK ID</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {banksData ? (
              banksData.map((bank) => (
                <tr key={bank.id}>
                    <td className="text-white-50 fw-bold fs-5 ps-5">{bank.bankName}</td>
                  <td className="text-white-50 fw-bold fs-5 ps-5">{bank.bankId}</td>
                  <td className="text-white">
                  <div>
            <button
              onClick={() => {
        
                const bankId = bank.bankId;
                if (buildingId) {
                  navigate(`/Buildings/${buildingId}/Banks/${bankId}/Devices`, { state: { deviceInfos: bank.deviceInfos, buildingName: buildingName, bankName: bank.bankName } });
                }
              }}
            >
              View
            </button>
          </div>
                  </td>
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

export default Banks;
