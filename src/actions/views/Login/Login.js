import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file
import Logo from '../../assets/bigLogo.png';

const Login = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Implement your login logic here
        // For simplicity, let's assume successful login if username and password are both 'admin'
        if (username === 'admin' && password === 'admin') {
            setIsLoggedIn(true); // Set isLoggedIn to true when logged in successfully
            navigate('/Home');
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card login-card">
                            <div className="logo-title-container">
                                <img className="logo-big" src={Logo} alt="Logo" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center" style={{ color: 'white' }} >Login</h4>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <form className="login-form-container">
                                    <div className="login-form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            placeholder="Email"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            style={{
                                                backgroundColor: 'rgba(58,62,82,1)',
                                                color: 'rgba(153,155,170,1)',
                                            }}
                                        />
                                    </div>
                                    <div className="login-form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            style={{
                                                backgroundColor: 'rgba(58,62,82,1)',
                                                color: 'rgba(153,155,170,1)',
                                            }}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button type="button" className=" login-btn btn btn-primary" onClick={handleLogin}>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
