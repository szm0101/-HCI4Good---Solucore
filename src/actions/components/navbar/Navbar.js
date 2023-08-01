import React from 'react';
import {useNavigate} from "react-router-dom";
import Logo from '../../assets/Solucore_Icon.png';


function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="navbar-container">
                <img src={Logo} alt="logo" width={105} height={85}/>
                <ul className="navbar-links">
                    <li><a onClick={() => {navigate('/')}}>HOME</a></li>
                    <li><a onClick={() => {navigate('/Buildings')}}>BUILDINGS</a></li>
                    <li><a onClick={() => {navigate('/Alerts')}}>ALERTS</a></li>
                    <li><a onClick={() => {navigate('/Settings')}}>SETTINGS</a></li>
                    <li><a onClick={() => {navigate('/Report')}}>REPORT</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

