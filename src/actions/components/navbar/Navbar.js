import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Logo from '../../assets/solutrak-logo.png';
import Photo from '../../assets/Solucore_Icon.png'
import NotificationIcon from "../../assets/notification-icon.png";


function Navbars() {
    return (
        <Navbar expand="lg" data-bs-theme="dark">
            <div className="navbar-container">
                <Navbar.Brand href="/"><img src={Logo} alt="logo" className='solutrak-logo' /></Navbar.Brand>
                
                <Nav className="float-right">
                    <Nav.Item >
                        <Nav.Link className="navbar-links" href="/Alerts">
                            <img src={NotificationIcon} alt='Notification icon' className='notif-icon' />
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <img src={Photo} alt="profile photo" className='profile-photo'></img>
                            <Nav className="me-auto">
                                <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item className="text-danger"href="#action/3.4">
                                        Log out
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                    </Nav.Item>
                </Nav>
            </div>
        </Navbar>
    );
}

export default Navbars;

