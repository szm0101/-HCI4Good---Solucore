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
import { useCookies } from 'react-cookie';
import AlternateView from './actions/views/AlternateView/AlternateView';

function App() {

    const [cookies] = useCookies(); // Access the 'isLoggedIn' cookie

    const userIsLoggedIn = cookies.isLoggedIn;


    return (
        <div className="App">
            <BrowserRouter>
                {userIsLoggedIn && !window.location.pathname.includes("/AlternateView") && <Navbar />}
                {userIsLoggedIn && !window.location.pathname.includes("/AlternateView") && <Sidebar />}
                

                <Routes>
                    <>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/Forgot" element={<Forgot />} />
                        {userIsLoggedIn && (
                            <>
                                <Route path="/Home" element={<Dashboard />} />
                                <Route path="/Alerts" element={<Alerts />} />
                                <Route path="/Buildings" element={<Buildings />} />
                                <Route path="/Settings" element={<Settings />} />
                                <Route path="/Report" element={<Reporting />} />
                                <Route path="/AlternateView" element={<AlternateView />} />
                            </>
                        )}
                    </>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


