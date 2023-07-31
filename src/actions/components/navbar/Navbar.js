import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from '../../assets/logo.svg';


function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="navbar-container">
                <h1>SOLUTRAK</h1>
                <ul className="navbar-links">
                    <li><a onClick={() => {navigate('/')}}>HOME</a></li>
                    <li><a onClick={() => {navigate('/Buildings')}}>BUILDINGS</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
