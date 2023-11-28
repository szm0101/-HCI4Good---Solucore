import "./App.css";
import Navbar from "./actions/components/navbar/Navbar";
import Sidebar from "./actions/components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./actions/views/Dashboard/Dashboard";
import Alerts from "./actions/views/Alerts/Alerts";
import Buildings from "./actions/views/Buildings/Buildings";
import Banks from "./actions/views/Buildings/Banks"
import Devices from "./actions/views/Buildings/Devices"
import Page from "./actions/views/Buildings/Page";
import Settings from "./actions/views/Settings/Settings";
import Reporting from "./actions/views/Reporting/Reporting";
import LoginPage from "./actions/views/Login/Login";
import Forgot from "./actions/views/Forgot/Forgot";
import Profile from "./actions/views/Profile/Profile";
import { Col } from "react-bootstrap";
import { useCookies } from "react-cookie";
import AlternateView from "./actions/views/AlternateView/AlternateView";

function App() {
  const [cookies] = useCookies(); // Access the 'isLoggedIn' cookie

  const userIsLoggedIn = cookies.isLoggedIn;

  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar-component">
          {userIsLoggedIn &&
            !window.location.pathname.includes("/AlternateView") && <Navbar />}
        </div>

        <div className="page-components">
          {userIsLoggedIn &&
          !window.location.pathname.includes("/AlternateView") ? (
            <Col xs={2} md={1} lg={1}>
              <div className="sidebar-component">{<Sidebar />}</div>
            </Col>
          ) : null}

          {!window.location.pathname.includes("/AlternateView") ? (
            <Col
              xs={userIsLoggedIn ? 10 : 12}
              md={userIsLoggedIn ? 11 : 12}
              lg={userIsLoggedIn ? 11 : 12}
            >
              <div className="main-component">
                <Routes>
                  <>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/Forgot" element={<Forgot />} />
                  </>
                </Routes>
                {userIsLoggedIn && (
                  <Routes>
                    <>
                      <Route path="/Home" element={<Dashboard />} />
                      <Route path="/Alerts" element={<Alerts />} />
                      <Route path="/Buildings" element={<Page />} >
                        <Route index element={<Buildings />} />
                        <Route path=":buildingId/Banks" element={<Banks />} />
                        <Route path=":buildingId/Banks/:bankId/Devices" element={<Devices />} />
                      </Route>                  
                    </>
                  </Routes>
                )}
              </div>
            </Col>
          ) : (
            <Routes>
              <Route path="/AlternateView" element={<AlternateView />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
