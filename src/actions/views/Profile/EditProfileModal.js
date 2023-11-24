import React, { useState } from 'react';
import { Button, Form, Modal, Alert } from 'react-bootstrap';
import { useCookies } from 'react-cookie'; 
import './EditProfileModal.css';

function EditProfileModal(props) {

    const [cookies, setCookie] = useCookies();
    const token = cookies.token;
    const fName = cookies.firstName;
    const lName = cookies.lastName;
    const pNumber = cookies.phoneNumber;
    const mNumber = cookies.mobileNumber;

    const initialProfileData = {
        firstName: fName,
        lastName: lName,
        phoneNumber: pNumber,
        mobile: mNumber,
      };

    const [profileFormData, setProfileFormData] = useState(initialProfileData);

    const isValidName = (name) => /^[A-Za-z]+$/.test(name);
    const isValidNumber = (number) => /^\d+$/.test(number);

    const [errmsg, setErrMsg] = useState(null);
    const handleCloseAlert = () => {
        setErrMsg(null);
      };

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
        } else if (!isValidName(profileFormData.firstName) || !isValidName(profileFormData.lastName)) {
            setErrMsg('First name and last name should consist of only letters');
        } else if (!isValidNumber(profileFormData.phoneNumber) || !isValidNumber(profileFormData.mobile)) {
            setErrMsg('Phone number and mobile number should consist of only numbers');
        } else {
            setErrMsg(null);
            handleUpdateAccount(token);
            props.onHide();
        }
      };

    const handleUpdateAccount = (userToken) => {

        var myHeaders = new Headers();
        myHeaders.append("Valid-token", userToken);
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "firstName": profileFormData.firstName,
          "lastName": profileFormData.lastName,
          "phoneNumber": profileFormData.phoneNumber,
          "mobileNumber": profileFormData.mobile
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("https://services.solucore.com/solutrak/api/accounts/update", requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                const status = data.IsSuccess;
                if (status) {
                    window.alert("Your account information has been succesfully updated." );
                    setCookie('firstName', profileFormData.firstName);
                    setCookie('lastName', profileFormData.lastName);
                    setCookie('phoneNumber', profileFormData.phoneNumber);
                    setCookie('mobileNumber', profileFormData.mobile);
                    window.location.reload(); 
                } else {
                    window.alert("Status: " + data.IsSuccess + "\n" + data.Message )
                }
            })
            .catch(error => console.log('error', error));  
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
        {errmsg && (
            <Alert variant="danger" onClose={handleCloseAlert} dismissible>
                {errmsg}
            </Alert>
        )}
        <Form className='mx-4'>
            <Form.Group className="mb-3" controlId="editProfile.oldPassword">
                <Form.Label className='text-white fs-6'>FIRST NAME</Form.Label>
                <Form.Control
                    type="text" 
                    placeholder={fName}
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
                    placeholder={lName}
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
                    placeholder={pNumber}
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
                    placeholder={mNumber}
                    name="mobile"
                    value={profileFormData.mobile}
                    onChange={handleChange}
                    style={{width: '100%'}}
                />
            </Form.Group>
        </Form>
        <div className='text-center'>
            <Button className="fs-5 editProfile-btn"  onClick={() => { handleSubmit();}}>
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
