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
    <div className="container mt-4">
      <h2>Banks</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {banksData.map((bank) => (
            <tr key={bank.id}>
              <td>{bank.id}</td>
              <td>{bank.name}</td>
              <td>{bank.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Banks;
