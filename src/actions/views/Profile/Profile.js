import React, { useState} from 'react';
import { Card, Form } from 'react-bootstrap';
import Photo from '../../assets/profile-icon.png'
import './Profile.css';

const Profile = () => {

    const [userData, setUserData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        phoneNumber: '123-456-7890',
      });

      const [profilePicture, setProfilePicture] = useState(Photo);
    
      

    return(
        <div className=" container mt-4">
      <div className="row">
        <div className="col-md-6">
          <Card className='h-100'>
            <Card.Body>
              <Card.Title>User Information</Card.Title>
              <Card.Text>
                <strong>First Name:</strong> {userData.firstName} <br />
                <strong>Last Name:</strong> {userData.lastName} <br />
                <strong>Phone Number:</strong> {userData.phoneNumber} <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card className='h-100'>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <Card.Title>Profile Picture</Card.Title>
              {/* Display the profile picture if available */}
              {profilePicture ? (
                <img
                  src={Photo}
                  alt="Profile"
                  className="img-fluid"
                />
              ) : (
                <p className="text-muted">No picture uploaded</p>
              )}

              {/* Upload Button and Form */}
              <Form>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Default file input example</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
        </div>
        </div>
        );
};

export default Profile;