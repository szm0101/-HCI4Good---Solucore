import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useCookies } from 'react-cookie'; 
import './Modal.css';

function ChangePasswordModal(props) {

    const [cookies, setCookie] = useCookies(); // Initialize the isLoggedIn cookie
    const token = cookies.token;

    const initialFormData = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
    const handleSubmit = () => {

        if (formData.oldPassword === '' || formData.newPassword === '' || formData.confirmPassword === '') {
            window.alert('Please fill in all fields');
        } else if (formData.newPassword !== formData.confirmPassword) {
            window.alert('New password and confirm password do not match');
        } else {
            handleChangePassword(token);
        }
      };

    const handleChangePassword = (userToken) => {
        console.log(formData);
        setFormData(initialFormData);

        var myHeaders = new Headers();
        myHeaders.append("Valid-token", userToken);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "oldPassword": formData.oldPassword,
            "newPassword": formData.newPassword
          });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("https://services.solucore.com/solutrak/api/accounts/changePassword", requestOptions)
          .then(response => response.text())
          .then(result => {
              // Check the result and handle accordingly
              const data = JSON.parse(result);
              const status = data.IsSuccess;
            if (status) {
                window.alert("Your password has been succesfully updated to: " + formData.newPassword)
            } else {
                window.alert("Status: " + data.IsSuccess + "\n" + data.Message )
            }
          })
          .catch(error => window.alert('error', error));
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
          CHANGE PASSWORD
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{backgroundColor:'#3a3e52'}} className='custom-modal-border'>
        <Form className='mx-4'>
            <Form.Group className="mb-3" controlId="changePassword.oldPassword">
                <Form.Label className='text-white fs-6'>OLD PASSWORD</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder=""
                    name="oldPassword"
                    value={formData.oldPassword}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="changePassword.newPassword">
                <Form.Label className='text-white fs-6'>NEW PASSWORD</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder=""
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="changePassword.confirmPassword">
                <Form.Label className='text-white fs-6'>CONFIRM PASSWORD</Form.Label>
                <Form.Control
                    type="password" 
                    placeholder=""
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </Form.Group>
        </Form>
        <div className='text-center'>
            <Button className="fs-5" variant="primary" onClick={() => { handleSubmit(); props.onHide(); }}>
                <p className='my-auto mx-3'>
                SAVE
                </p>
            </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
export default ChangePasswordModal;
