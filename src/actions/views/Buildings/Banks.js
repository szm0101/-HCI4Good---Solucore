import React from "react";
import { Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Banks = () => {
  // Sample data for the table
  
    const location = useLocation();
    const banksData = location.state?.bankInfos || [];
    console.log(banksData);

  return (
    <div className="buildings-container">
    <div className="buildings-table">
 
      <Table className='table'>
      <thead>
      <div className='text-white p-4'>Banks</div>
        <tr>
        <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>

      <tbody >
            {banksData ? (
              banksData.map((bank) => (
                <tr key={bank.id}>
                  <td className='text-white'>{bank.bankId}</td>
                 <td className='text-white'>{bank.bankName}</td>
                 <td className='text-white'>{bank.location}</td>
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

export default Banks;
