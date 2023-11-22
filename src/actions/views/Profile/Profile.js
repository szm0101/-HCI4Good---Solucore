import React, { useState} from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Photo from '../../assets/profile-icon.png'
import './Profile.css';
import ChangePasswordModal from '../../components/ChangePasswordModal/Modal.js';
import EditProfileModal from './EditProfileModal.js';
import { useCookies } from 'react-cookie';

const Profile = () => {

    const [cookies, setCookie] = useCookies();
    const token = cookies.token;
    const fName = cookies.firstName;
    const lName = cookies.lastName;
    const pNumber = cookies.phoneNumber;
    const mNumber = cookies.mobileNumber;
    const pPicture = cookies.profilePictureUrl;

    const [userData, setUserData] = useState({
        firstName: fName,
        lastName: lName,
        phoneNumber: pNumber,
        mobile: mNumber,
      });

      const [profilePictureUrl, setProfilePictureUrl] = useState(pPicture);
    
      const [passwordModalShow, setPasswordModalShow] = React.useState(false);
      const [editModalShow, setEditModalShow] = React.useState(false);

      const handlePasswordClose = () => {
        setPasswordModalShow(false);
    };
    const handleEditClose = () => {
        setEditModalShow(false);
    };
    const handleImageError = () => {
        setProfilePictureUrl(Photo);
    }; 

    return(
        <div className=" container mt-4 ms-4">
      <div className="row">
        <div className="col-md-6">
          <Card className='h-100 profile-card-dark-bg text-white'>
            <Card.Body >
              <Card.Title className='mt-2 mb-5 fs-2'>User Information</Card.Title>
              <hr/>
              <Card.Text className='fs-5 text-start'>
                <p className='ms-3'>First Name: {userData.firstName} </p> <hr />
                <p className='ms-3'>Last Name: {userData.lastName} </p> <hr />
                <p className='ms-3'>Phone Number: {userData.phoneNumber} </p> <hr />
                <p className='ms-3'>Mobile: {userData.mobile} </p> <hr />
                <div className="d-flex justify-content-center mt-4">
                    <Button className='mx-2 btn-lg editProfile-btn' onClick={() => setEditModalShow(true)}>
                        Edit Profile
                    </Button>
                    <Button className='mx-2 btn-lg editProfile-btn' onClick={() => setPasswordModalShow(true)}>
                        Change Password
                    </Button>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card className='h-100 profile-card-dark-bg text-white'>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center mb-5">
              <Card.Title className='mt-2 mb-5 fs-2'>Profile Picture</Card.Title>
              <img
                  src={profilePictureUrl}
                  alt="Profile"
                  className="img-fluid photo"
                  onError={handleImageError}
                />

              {/* Upload Button and Form */}
              <Form>
              <Form.Group controlId="formFile" className="mt-5">
                <Form.Label className='btn btn-lg editProfile-btn btn-primary'>Change Picture</Form.Label>
                <Form.Control 
                    type="file"
                    className='d-none'
                />
            </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </div>
        </div>
        <ChangePasswordModal show={passwordModalShow} onHide={handlePasswordClose} />
        <EditProfileModal show={editModalShow} onHide={handleEditClose}/>
        </div>
        );
};

export default Profile;