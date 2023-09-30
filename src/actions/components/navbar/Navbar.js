import React from 'react';
import {useNavigate} from "react-router-dom";
import Logo from '../../assets/solutrak-logo.png';
import NotificationIcon from "../../assets/notification-icon.png";


function Navbar() {
    const navigate = useNavigate();
    return (
        <nav>
            <div className="navbar-container">
                <img src={Logo} alt="logo" className='solutrak-logo'/>
                <ul className="navbar-links">
                    <li><a onClick={() => {navigate('/')}}>HOME</a></li>
                    <li><a onClick={() => {navigate('/Buildings')}}>BUILDINGS</a></li>
                    <li><a onClick={() => {navigate('/Alerts')}}><img src={NotificationIcon} alt='Notification icon' className='notif-icon'/></a></li>
                    <li><a onClick={() => {navigate('/Settings')}}>SETTINGS</a></li>
                    <li><a onClick={() => {navigate('/Report')}}>REPORT</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

