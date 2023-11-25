import React from "react";
import { Table } from "react-bootstrap";

const Banks = () => {
  // Sample data for the table
  const banksData = [
    { id: 1, name: "Bank A", location: "City A" },
    { id: 2, name: "Bank B", location: "City B" },
    { id: 3, name: "Bank C", location: "City C" },
    // Add more sample data as needed
  ];

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
                  <td className='text-white'>{bank.id}</td>
                 <td className='text-white'>{bank.name}</td>
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
