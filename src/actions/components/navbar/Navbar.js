import React, { useState } from 'react';
import "./Navbar.css";
import { Nav, Navbar, NavDropdown, Modal, Dropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Logo from '../../assets/solutrak-logo.png';
import Photo from '../../assets/profile-icon.png'
import PasswordIcon from '../../assets/change-password-icon.png'
import PowerIcon from '../../assets/power-icon.png'
import EditIcon from '../../assets/edit-info-icon.png'
import NotificationIcon from "../../assets/notification-icon.png";
import { useCookies } from 'react-cookie'; 
import ChangePasswordModal from '../ChangePasswordModal/Modal.js';
import ImpersonationDropDown from '../ImpersonationDropdown/ImpersonationDropdown.js';

function Navbars() {

    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies();
    const token = cookies.token;
    const pPicture = cookies.profilePictureUrl;
    const [modalShow, setModalShow] = React.useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    const handleClose = () => {
        setModalShow(false);
    };

    const handleSignOut = (userToken) => {

        var myHeaders = new Headers();
        myHeaders.append("Valid-token", userToken);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
          };
          
          fetch("https://services.solucore.com/solutrak/api/accounts/signOut", requestOptions)
          .then(response => response.text())
          .then(result => {
              // Check the result and handle the login accordingly
              const data = JSON.parse(result);
              const status = data.IsSuccess;
              const userInfo = data.Data;
              console.log(data.IsSuccess);
              console.log(data.Message);

            if (status) {
                setCookie('isLoggedIn', 'false', { path: '/', sameSite: 'None', secure: true });
                setCookie('token', '', { path: '/', sameSite: 'None', secure: true });
                setCookie('userType', '', { path: '/', sameSite: 'None', secure: true });
                setCookie('defaultLat', '', { path: '/', sameSite: 'None', secure: true });
                setCookie('defaultLng', '', { path: '/', sameSite: 'None', secure: true });
                navigate('/');
            } else {
                console.error("Error");
            }
          })
          .catch(error => console.log('error', error));

        //   const handleSignOut = () => {
        //     setCookie('isLoggedIn', 'false', { path: '/', sameSite: 'None', secure: true });
        //     navigate('/');
        //     window.location.reload();
        // };
    };

    return (
        <Navbar data-bs-theme="dark">
            <div className="navbar-container">
                <Navbar.Brand href="/Home"><img src={Logo} alt="logo" className='solutrak-logo' /></Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Item className='me-4'>
                    <ImpersonationDropDown/>
                    </Nav.Item>

                    <Nav.Item className='me-4'>
                        <Nav.Link className="navbar-links" href="/Alerts">
                            <img src={NotificationIcon} alt='Notification icon' className='notif-icon' />
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className='me-4'>
                        <Nav>
                            <NavDropdown align='end' title={<img src={pPicture} alt="profile photo" className='profile-photo' />} className='me-3' id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Profile" className='py-2 fs-6'>
                                    <img
                                        alt=""
                                        src={EditIcon}
                                        width="25"
                                        height="25"
                                        className="d-inline-block align-top me-2"
                                    />
                                    Edit info
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => setModalShow(true)} className='py-2 fs-6'>
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
                                <NavDropdown.Item  onClick={() => handleSignOut(token)} className='py-2 fs-6'>
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

