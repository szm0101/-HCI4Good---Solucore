import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from '../../assets/solutrak-logo.png';
import NotificationIcon from "../../assets/notification-icon.png";


function Navbars() {
    return (
        <Navbar expand="lg" data-bs-theme="dark">
            <div className="navbar-container">
                <Navbar.Brand href="/"><img src={Logo} alt="logo" className='solutrak-logo' /></Navbar.Brand>
                
                <Nav className="navbar-links">
                    <Nav.Item>
                        <Nav.Link className="navbar-links" href="/Alerts">
                            <img src={NotificationIcon} alt='Notification icon' className='notif-icon' />
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Navbars;

