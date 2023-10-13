// Forgot.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handlePasswordReset = () => {
        setMessage('Password reset successful');
    
            setTimeout(() => {
                setMessage('');
                navigate('/'); 
            }, 2000); 
    };
    

    return (
        <Container fluid className="forgot-container d-flex align-items-center justify-content-center">
            <Form className="forgot-form">
                <h4 className="forgot-title">Password Reset</h4>
                {message && <p className="message">{message}</p>}
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    type="button"
                    variant="primary"
                    onClick={handlePasswordReset}
                >
                    Reset Password
                </Button>
            </Form>
        </Container>
    );
};

export default Forgot;
