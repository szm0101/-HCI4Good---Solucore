// Forgot.js
import React, { useState } from 'react';
import { Alert, Form, Button, Card } from 'react-bootstrap';
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
        }, 4000);
    };

    return (
        <div style={{ backgroundColor: '#2b2d3c', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Card className="forgot-card px-5 py-5" style={{ background: '#2b2d3c', border: '1px solid rgba(85, 87, 99, 1)' }}>
                <Card.Header className= "text-white h3"style={{ background: 'transparent', borderColor: 'transparent' }}>Reset Password</Card.Header>
                <Card.Body>
                    <Form className="forgot-form">
                        {message && 
                        <Alert variant='info'>
                            {message}
                        </Alert>}
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mb-2"
                                style={{
                                    backgroundColor: 'rgba(58, 62, 82, 1)',
                                    color: 'rgba(153, 155, 170, 1)',
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="mb-2"
                                style={{
                                    backgroundColor: 'rgba(58, 62, 82, 1)',
                                    color: 'rgba(153, 155, 170, 1)',
                                }}
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
                </Card.Body>
            </Card>
        </div>
    );
};

export default Forgot;
