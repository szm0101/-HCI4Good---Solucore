import React from 'react';
import {useNavigate} from "react-router-dom";
import Logo from '../../assets/Solucore_Icon.png';


function Navbar() {
    const navigate = useNavigate();
    const handleSignOut = () => {
        // Navigate to the root path and then refresh the page
        navigate('/');
        window.location.reload();
    };
    return (
        <nav>
            <div className="navbar-container">
                <img src={Logo} alt="logo" width={105} height={85}/>
                <ul className="navbar-links">
                    <li><a onClick={() => {navigate('/Home')}}>HOME</a></li>
                    <li><a onClick={() => {navigate('/Buildings')}}>BUILDINGS</a></li>
                    <li><a onClick={() => {navigate('/Alerts')}}>ALERTS</a></li>
                    <li><a onClick={() => {navigate('/Settings')}}>SETTINGS</a></li>
                    <li><a onClick={() => {navigate('/Report')}}>REPORT</a></li>
                    <li><a onClick={() => {handleSignOut()}} style={{color:"red"}} >SIGN OUT</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

