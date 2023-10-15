import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form, Alert, Image,} from 'react-bootstrap'; // Import Bootstrap components
import Logo from '../../assets/solutrak-logo.png';
import { useCookies } from 'react-cookie';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(); // Initialize the isLoggedIn cookie

    const users = [
        { username: 'admin', password: 'password' },
        { username: 'user1', password: 'password' },
        { username: 'client', password: 'password' },
    ];

    const handleForgotPassword = () => {
        navigate('/Forgot');
    };

    const handleLogin = () => {
        const userFound = users.find(user => user.username === username && user.password === password);
    
        if (userFound) {
            // Set 'isLoggedIn' in localStorage to 'true' when the user logs in
            setCookie('isLoggedIn', 'true', { path: '/', sameSite: 'None'});
            navigate('/Home');
        } else {
            setError('Invalid username or password');
        }
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
                                onClick={handleLogin}
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
