import React from 'react';
import "./Navbar.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/solutrak-logo.png';
import Photo from '../../assets/profile-icon.png';
import NotificationIcon from "../../assets/notification-icon.png";
import EditInfoIcon from "../../assets/edit-icon.png";
import ChangePassIcon from "../../assets/lock-icon.png";
import SignOutIcon from "../../assets/signOut-icon.png";
import { useCookies } from 'react-cookie'; //

function Navbars() {

    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();

    const handleSignOut = () => {
        setCookie('isLoggedIn', 'false', { path: '/', sameSite: 'None', secure: true });
        navigate('/');
        window.location.reload();
    };

    return (
        <Navbar data-bs-theme="dark">
            <div className="navbar-container">
                <Navbar.Brand href="/Home"><img src={Logo} alt="logo" className='solutrak-logo' /></Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Item className='me-4'>
                        <Nav.Link className="navbar-links" href="/Alerts">
                            <img src={NotificationIcon} alt='Notification icon' className='notif-icon' />
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className='me-4'>
                        <Nav>
                            <NavDropdown align='end' title={<img src={Photo} alt="profile photo" className='profile-photo' />} className='me-3' id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    <img src={EditInfoIcon} alt='Edit info icon' className='dropdown-icon me-3' />
                                    Edit info
                                </NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#action/3.2">
                                    <img src={ChangePassIcon} alt='Change password icon' className='dropdown-icon me-3 ms-1' />
                                    Change password
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                
                                <NavDropdown.Item className="text-danger" onClick={handleSignOut}>
                                    <img src={SignOutIcon} alt='Sign out icon' className='dropdown-icon me-3' />
                                    Sign out
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

