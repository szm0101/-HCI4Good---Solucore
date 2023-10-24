import React, { useState } from 'react';
import "./Navbar.css";
import { Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/solutrak-logo.png';
import Photo from '../../assets/profile-icon.png'
import PasswordIcon from '../../assets/change-password-icon.png'
import PowerIcon from '../../assets/power-icon.png'
import EditIcon from '../../assets/edit-info-icon.png'
import NotificationIcon from "../../assets/notification-icon.png";
import EditInfoIcon from "../../assets/edit-icon.png";
import ChangePassIcon from "../../assets/lock-icon.png";
import SignOutIcon from "../../assets/signOut-icon.png";
import { useCookies } from 'react-cookie'; //
import ChangePasswordModal from '../ChangePasswordModal/Modal.js';

function Navbars() {

    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();
    const [modalShow, setModalShow] = React.useState(false);

    const handleClose = () => {
        setModalShow(false);
    };

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
                                <NavDropdown.Item href="#action/3.1" className='my-2 fs-6'>
                                    <img
                                        alt=""
                                        src={EditIcon}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top me-2"
                                    />
                                    Edit info
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => setModalShow(true)} className='my-2 fs-6'>
                                    <img
                                        alt=""
                                        src={PasswordIcon}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top me-2"
                                    />
                                    Change password
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item  onClick={handleSignOut} className='my-2 fs-6'>
                                    <img
                                        alt=""
                                        src={PowerIcon}
                                        width="23"
                                        height="23"
                                        className="d-inline-block align-top me-2"
                                    />
                                    Sign out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Nav.Item>
                </Nav>
            </div>
            <ChangePasswordModal show={modalShow} onHide={handleClose} />
        </Navbar>
        
    );
}

export default Navbars;

