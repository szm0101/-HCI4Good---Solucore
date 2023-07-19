import React from 'react';
import logo from '../../assets/logo.svg';
import {useNavigate} from "react-router-dom";


function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="navbar-container">
                <div className="logo" style={{ width: "200px" }}>
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="navbar-links">
                    <li><a onClick={() =>
                    {navigate('/Buildings')}
                    }>Buildings</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;
