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
        <Container fluid className="forgot-container d-flex align-items-center justify-content-center py-0">
            <Card className="forgot-card px-0 py-0">
                <div className="forgot-title-container px-0 py-0 text-center">
                    <Image className="logo-big" src={Logo} alt="Logo" />
                    <h4 className="card-title text-center" style={{ color: 'white' }}>
                        Forgot Password
                    </h4>
                    <div className='py-0 text-center text-white' style={{width: '40%',}}>We can help you reset your password using email address associated with your account.</div>
                </div>
                <Card.Body>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="forgot-form forgot-form-container">
                        {message &&
                            <Alert variant='info'>
                                {message}
                            </Alert>}
                        <Form.Group className="py-0">
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
