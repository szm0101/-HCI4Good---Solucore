// Forgot.js
import React, { useState } from 'react';
import { Alert, Form, Button, Card, Image, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/solutrak-logo.png';
import './Forgot.css';


const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handlePasswordReset = () => {
        setMessage('Password reset successful');

        setTimeout(() => {
            setMessage('');
            navigate('/');
        }, 4000);
    };

    return (
        <Container fluid className="forgot-container d-flex align-items-center justify-content-center">
            <Card className="forgot-card w-25 h-50 px-0 py-0">
                <div className="forgot-title-container text-center">
                    <Image className="logo-big" src={Logo} alt="Logo" />
                </div>
                <Card.Body className='mx-4'>
                    <h4 className="card-title text-center" style={{ color: 'white' }}>
                        Forgot Password
                    </h4>
                    <div className='card-title text-center text-white'>We can help you reset your password using email address associated with your account.</div>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="forgot-form forgot-form-container">
                        {message &&
                            <Alert variant='info'>
                                {message}
                            </Alert>}
                        <Form.Group className="">
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="my-3"
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
                <Card.Footer className='text-primary w-100 ' style={{backgroundColor: '#3a3e52',}}>
                    <a href="/" class="text-reset">Login</a>
                </Card.Footer>
            </Card>
        </Container>

        
    );
};

export default Forgot;
