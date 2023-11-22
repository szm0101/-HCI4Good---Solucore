import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useCookies } from 'react-cookie'; 
import './EditProfileModal.css';

function EditProfileModal(props) {

    const [cookies, setCookie] = useCookies(); // Initialize the isLoggedIn cookie
    const token = cookies.token;

    const initialProfileData = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        mobile: '',
      };
    const [profileFormData, setProfileFormData] = useState(initialProfileData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileFormData({
          ...profileFormData,
          [name]: value,
        });
      };
    
    const handleSubmit = () => {

        if (profileFormData.firstName === '' || profileFormData.lastName === '' || profileFormData.phoneNumber === ''|| profileFormData.mobile === '') {
            window.alert('Please fill in all fields');
        } else {
            // handleChangePassword(token);
            window.alert('nothing');
        }
      };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{backgroundColor: '#4e9fe3'}}>
        <Modal.Title className="text-white fw-bold" id="contained-modal-title-vcenter">
          EDIT PROFILE
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor:'#3a3e52'}} className='custom-modal-border'>
        <Form className='mx-4'>
            <Form.Group className="mb-3" controlId="editProfile.oldPassword">
                <Form.Label className='text-white fs-6'>FIRST NAME</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder=""
                    name="firstName"
                    value={profileFormData.firstName}
                    onChange={handleChange}
                    style={{width: '100%'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfile.lastName">
                <Form.Label className='text-white fs-6'>LAST NAME</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder=""
                    name="lastName"
                    value={profileFormData.lastName}
                    onChange={handleChange}
                    style={{width: '100%'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfile.phoneNumber">
                <Form.Label className='text-white fs-6'>PHONE NUMBER</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder=""
                    name="phoneNumber"
                    value={profileFormData.phoneNumber}
                    onChange={handleChange}
                    style={{width: '100%'}}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editProfile.mobile">
                <Form.Label className='text-white fs-6'>MOBILE NUMBER</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder=""
                    name="mobile"
                    value={profileFormData.mobile}
                    onChange={handleChange}
                    style={{width: '100%'}}
                />
            </Form.Group>
        </Form>
        <div className='text-center'>
            <Button className="fs-5 editProfile-btn"  onClick={() => { handleSubmit(); props.onHide(); }}>
                <p className='my-auto mx-3'>
                SAVE
                </p>
            </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default EditProfileModal;
