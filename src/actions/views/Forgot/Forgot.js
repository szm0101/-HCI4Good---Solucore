// Forgot.js
import React, { useState } from 'react';
import { Alert, Form, Button, Card, Image, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/solutrak-logo.png';
import './Forgot.css';


const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const [emailSent, setEmailSent] = useState(false);


    const handleSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError(true);
            setMessage('Email is not a valid email.')
            return;
        }else{
            handlePasswordReset();
        }
    };
    
    const handlePasswordReset = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://services.solucore.com/solutrak/api/accounts/forgotPassword?email=" + email, requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                const status = data.IsSuccess;

                if (status) {
                    setEmailSent(true);
                    console.log(data.Message);
        setError('');
                } else {
                    // window.alert("Status: " + data.IsSuccess + "\n" + data.Message );
                    setError(true);
                    setMessage(data.Message)

                }
            })
            .catch(error => console.log('error', error));
    };

    return (
        <Container fluid className="forgot-container d-flex align-items-center justify-content-center py-0">
            <Card className="forgot-card px-0 py-0">     
                <Card.Body className='py-5 mx-5'>
                    <div className="forgot-title-container px-0 py-0 text-center">
                        <Image className="logo-big mb-4" src={Logo} alt="Logo" />
                        <h4 className="card-title text-center fw-light fs-3" style={{ color: 'white' }}>
                            {emailSent ? 'Almost done' : 'Forgot Password'}
                        </h4>
                        <div className='text-center w-100 pt-3'>
                            <div className='py-0 text-center text-white text-wrap fw-light text-white-50' style={{wordWrap: 'break-word'}}>
                                <p>
                                   
                                    {emailSent ? (
                                        <>
                                        You will be able to reset your password by<br/> hitting the link sent via email
                                        </>
                                    ) : (
                                        <>
                                         We can help you reset your password using the<br/> email address associated with your account.
                                        </>
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Form className="forgot-form forgot-form-container">
                            {emailSent ? (
                                 <>
                                 </>      
                            ) : (
                                <Form.Group className="py-0 w-100">
                                    <Form.Control
                                         type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className={`forgot-input ${error ? 'border-danger mb-1' : 'mb-3'}`}
                                        style={{
                                            backgroundColor: 'rgba(58, 62, 82, 1)',
                                            color: 'rgba(153, 155, 170, 1)',
                                            borderColor: error ? 'red' : '',
                                        }}
                                    />
                                    {error && (
                                        <div className=" fw-bold text-start mb-3" style={{color: '#a94442'}}>
                                            {message}
                                        </div>
                                    )}
                                    <Button
                                        type="button"
                                        variant="primary"
                                        className='w-100 forgot-btn'
                                        onClick={handleSubmit}
                                    >
                                        Reset Password
                                    </Button>
                                </Form.Group>       
                                )}
                    </Form>
                    {emailSent && (
                        <div className="text-center mt-3">
                            <Button
                                type="button"
                                variant="primary"
                                className='w-100 forgot-btn'
                                href='/'
                            >
                                Go Back to Login
                            </Button>
                        </div>
                    )}
                </Card.Body>
                {!emailSent && (
                    <Card.Footer className='text-primary w-100 ' style={{backgroundColor: '#3a3e52',}}>
                        <a href="/" class="text-decoration-none login-link fs-5">Login</a>
                    </Card.Footer>
                )}
                {emailSent && (
                    <>
                    <div className='py-3'></div>
                    </>
                )}
            </Card>
        </Container>

        
    );
};

export default Forgot;
