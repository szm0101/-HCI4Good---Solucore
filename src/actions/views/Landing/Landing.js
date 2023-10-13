import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Container, Row, Col, Image} from 'react-bootstrap';
import './Landing.css'; // Import the CSS file
import Logo from '../../assets/solutrak-logo.png';

const Landing = () => {
    const navigate = useNavigate();

    const handleUserType = (/*type*/) => {
        //logic
        navigate('/Login');
    };

    return (
        <div className="landing-page">
            <Container className="vh-100 d-flex justify-content-center align-items-center">
                <Card className="text-center card-container">
                <div className="logo-landing-cont text-center">
                    <Image className="landing-logo" src={Logo} alt="Logo" />
                </div>
                    <Card.Body>
                        <h1 className="text-white">Welcome to the Website</h1>
                        <p className="text-white">What type of user are you?</p>
                        <Row className="justify-content-center">
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    onClick={() => handleUserType(/*type*/)}
                                    className=" btn-lg mx-2"
                                >
                                    Client
                                </Button>
                            </Col>
                            <Col md="auto">
                                <Button
                                    variant="primary"
                                    onClick={() => handleUserType(/*type*/)}
                                    className=" btn-lg mx-2"
                                >
                                    Engineer
                                </Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Landing;
