import './App.css';
import Navbar from './actions/components/navbar/Navbar';
import './actions/components/navbar/Navbar.css';
import Sidebar from "./actions/components/Sidebar/Sidebar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./actions/views/Dashboard/Dashboard";
import Alerts from "./actions/views/Alerts/Alerts";
import Buildings from "./actions/views/Buildings/Buildings";
import Settings from "./actions/views/Settings/Settings";
import Reporting from "./actions/views/Reporting/Reporting";
import LoginPage from "./actions/views/Login/Login";
import Landing from './actions/views/Landing/Landing';
import Forgot from './actions/views/Forgot/Forgot';


function App() {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') || 'false';

    return (
        <div className="App">
            <BrowserRouter>
                {storedIsLoggedIn === 'true' && <Navbar />}
                {storedIsLoggedIn === 'true' && <Sidebar />}

                <Routes>
                    {storedIsLoggedIn === 'true' ? (
                        <>
                            <Route path="/Home" element={<Dashboard />} />
                            <Route path="/Alerts" element={<Alerts />} />
                            <Route path="/Buildings" element={<Buildings />} />
                            <Route path="/Settings" element={<Settings />} />
                            <Route path="/Report" element={<Reporting />} />
                        </>
                    ) : (
                        <>
                         <Route
                            path="/Login"
                            element={<LoginPage />}
                        />
                        <Route path="/" element={<Landing/>}/>
                        <Route path="/Forgot" element={<Forgot />}/>
                        </>
                    )}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


