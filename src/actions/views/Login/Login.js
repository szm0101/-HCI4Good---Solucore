import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form, Alert, Image, } from 'react-bootstrap'; // Import Bootstrap components
import Logo from '../../assets/solutrak-logo.png';
import { useCookies } from 'react-cookie';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(); // Initialize the isLoggedIn cookie


    const handleForgotPassword = () => {
        navigate('/Forgot');
    };
    

    const handleLogin = (username, password) => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "email": username,
            "password": password
          });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          
          fetch("https://services.solucore.com/solutrak/api/accounts/signIn", requestOptions)
          .then(response => response.text())
          .then(result => {
              // Check the result and handle the login accordingly
              const data = JSON.parse(result);
              const status = data.IsSuccess;
              const userInfo = data.Data;
            if (status) {
                setCookie('isLoggedIn', 'true', { path: '/', sameSite: 'None', secure: true });
                setCookie('token', userInfo.token, { path: '/', sameSite: 'None', secure: true });
                setCookie('userType', userInfo.role, { path: '/', sameSite: 'None', secure: true });
                // Get user's default location (Latitude and longgitute)
                setCookie('defaultLat', userInfo.defaultLocationLatitude, { path: '/', sameSite: 'None', secure: true });
                setCookie('defaultLng', userInfo.defaultLocationLongitute, { path: '/', sameSite: 'None', secure: true });
                //Get user's profile data
                setCookie('firstName', userInfo.firstName, { path: '/', sameSite: 'None', secure: true });
                setCookie('lastName', userInfo.lastName, { path: '/', sameSite: 'None', secure: true });
                setCookie('phoneNumber', userInfo.phoneNumber, { path: '/', sameSite: 'None', secure: true });
                setCookie('mobileNumber', userInfo.mobileNumber, { path: '/', sameSite: 'None', secure: true });
                setCookie('profilePictureUrl', userInfo.profilePictureUrl, { path: '/', sameSite: 'None', secure: true });

                navigate('/Home');
            } else {
                setError('Invalid username or password');
                console.log(data.IsSuccess);
            }
          })
          .catch(error => console.log('error', error));
    };
    
    

    return (
        <Container fluid className="login-container d-flex align-items-center justify-content-center">
            <Card className="login-card">
                <div className="logo-title-container text-center">
                    <Image className="logo-big" src={Logo} alt="Logo" />
                </div>
                <Card.Body>
                    <h4 className="card-title text-center" style={{ color: 'white' }}>
                        Login
                    </h4>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="login-form-container">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                id="username"
                                placeholder="Email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    backgroundColor: 'rgba(58, 62, 82, 1)',
                                    color: 'rgba(153, 155, 170, 1)',
                                    margin: '10px 0',
                                }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{
                                    backgroundColor: 'rgba(58, 62, 82, 1)',
                                    color: 'rgba(153, 155, 170, 1)',
                                    margin: '10px 0',
                                }}
                            />
                        </Form.Group>
                        <div className="text-center">
                            <Button
                                type="button"
                                className="forgot-password-btn"
                                variant="link"
                                onClick={handleForgotPassword}
                                style={{ margin: '10px 0' }}
                            >
                                Forgot Password ?
                            </Button>
                            <Button
                                type="button"
                                className="login-btn"
                                variant="primary"
                                onClick={() => handleLogin(username, password)}
                                style={{ margin: '10px 0' }}
                            >
                                Login
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;
