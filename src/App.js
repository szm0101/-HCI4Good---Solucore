import './App.css';
import Navbar from './actions/components/navbar/Navbar';
import Sidebar from "./actions/components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./actions/views/Dashboard/Dashboard";
import Alerts from "./actions/views/Alerts/Alerts";
import Buildings from "./actions/views/Buildings/Buildings";
import Settings from "./actions/views/Settings/Settings";
import Reporting from "./actions/views/Reporting/Reporting";
import LoginPage from "./actions/views/Login/Login";
import Forgot from './actions/views/Forgot/Forgot';
import RadialMenuTest from "./actions/views/RadialMenuTest/RadialMenuTest";
import Profile from './actions/views/Profile/Profile';
import { useCookies } from 'react-cookie';

function App() {

    const [cookies] = useCookies(); // Access the 'isLoggedIn' cookie

    const userIsLoggedIn = cookies.isLoggedIn;


    return (
        <div className="App">
            <BrowserRouter>
                {userIsLoggedIn && <Navbar />}
                {userIsLoggedIn && <Sidebar />}

                <Routes>
                    <>
                      <Route path="/" element={<LoginPage />} />
                      <Route path="/Forgot" element={<Forgot />} />
                    </>
                </Routes>

                <div className="container">
          
            
              {userIsLoggedIn && (
                <Routes>
                <>
                  <Route path="/Home" element={<Dashboard />} />
                  <Route path="/Alerts" element={<Alerts />} />
                  <Route path="/Buildings" element={<Buildings />} />
                  <Route path="/Settings" element={<Settings />} />
                  <Route path="/Report" element={<Reporting />} />
                  <Route path="/RadialMenuTest" element={<RadialMenuTest />} />
                  <Route path="/Profile" element={<Profile />} />
                </>
                </Routes>
              )}
          
        </div>
            </BrowserRouter>
        </div>
    );
}

export default App;


