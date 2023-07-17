import React from 'react';
import logo from '../../assets/logo.svg';


function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <div className="logo" style={{ width: "200px" }}>
                    <img src={logo} alt="Logo" />
                </div>
                <ul className="navbar-links">
                    <li><a href="#">Link 1</a></li>
                    <li><a href="#">Link 2</a></li>
                    <li><a href="#">Link 3</a></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;
