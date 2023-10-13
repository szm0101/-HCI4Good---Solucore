import React, { useState } from "react";
import "./Sidebar.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import HomeIcon from "../../assets/home-icon.png";
import BuildingIcon from "../../assets/building-icon.png";
import SettingIcon from "../../assets/settings-icon.png";

function Sidebar() {
  const activePagePaths = {
    "/Home": "Home",
    "/buildings": "Buildings",
    "/settings": "Settings",
  };

  const [activeIcon, setActiveIcon] = useState(
    activePagePaths[window.location.pathname]
  );

  const toggleOpacity = (name) => {
    setActiveIcon(name);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={2} md={1} lg={1} className="sidebar">
          <Navbar expand="lg" className="flex-column align-items-center">
            <Nav className="flex-column">
              <div className="nav-icon-container">
                <Nav.Link
                  href="/Home"
                  className="nav-link"
                  onClick={() => toggleOpacity("Home")}
                >
                  <img
                    src={HomeIcon}
                    alt="Home Icon"
                    className={activeIcon === "Home" ? "active" : null}
                  />
                </Nav.Link>
              </div>
              <div className="nav-icon-container">
                <Nav.Link
                  href="/buildings"
                  className="nav-link"
                  onClick={() => toggleOpacity("Buildings")}
                >
                  <img
                    src={BuildingIcon}
                    alt="Building Icon"
                    className={activeIcon === "Buildings" ? "active" : null}
                  />
                </Nav.Link>
              </div>
              <div className="nav-icon-container">
                <Nav.Link
                  href="/settings"
                  className="nav-link"
                  onClick={() => toggleOpacity("Settings")}
                >
                  <img
                    src={SettingIcon}
                    alt="Settings Icon"
                    className={activeIcon === "Settings" ? "active" : null}
                  />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
