import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './Modal.css';

function ChangePasswordModal(props) {

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
        console.log(formData);
        setFormData(initialFormData);
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
