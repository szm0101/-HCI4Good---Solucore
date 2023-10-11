import React from 'react';
import {useNavigate} from "react-router-dom";
import Logo from '../../assets/solutrak-logo.png';
import NotificationIcon from "../../assets/notification-icon.png";


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
                <img src={Logo} alt="logo" className='solutrak-logo'/>
                <ul className="navbar-links">
                    <li><a onClick={() => {navigate('/Alerts')}}><img src={NotificationIcon} alt='Notification icon' className='notif-icon'/></a></li>
                    <li><a onClick={() => {handleSignOut()}} style={{color:"red"}} >SIGN OUT</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

