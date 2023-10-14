import React from 'react';
import {Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {useNavigate} from "react-router-dom";
import Logo from '../../assets/solutrak-logo.png';
import Photo from '../../assets/Solucore_Icon.png'
import NotificationIcon from "../../assets/notification-icon.png";
import { useCookies } from 'react-cookie'; //

function Navbars() {

    const navigate = useNavigate();
    const [cookies,setCookie] = useCookies();

    const handleSignOut = () => {
        setCookie('isLoggedIn', 'false', { path: '/'});
        navigate('/');
        window.location.reload();
    };

    return (
        <Navbar data-bs-theme="dark">
            <div className="navbar-container">
                <Navbar.Brand href="/Home"><img src={Logo} alt="logo" className='solutrak-logo' /></Navbar.Brand>
                
                <Nav className="ml-auto">
                    <Nav.Item className='me-3 mt-2'>
                        <Nav.Link className="navbar-links" href="/Alerts">
                            <img src={NotificationIcon} alt='Notification icon' className='notif-icon' />
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item className='me-5'>
                        <img src={Photo} alt="profile photo" className='profile-photo'></img>
                            <Nav className="me-auto">
                                <NavDropdown title="Profile" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                    <NavDropdown.Item className="text-danger" onClick={handleSignOut}>
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

