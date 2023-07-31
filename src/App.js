import logo from './actions/assets/logo.svg';
import './App.css';
import Navbar from './actions/components/navbar/Navbar';
import Footer from './actions/components/Footer/Footer';
import './actions/components/navbar/Navbar.css';
import './actions/components/Footer/Footer.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Buildings from "./actions/views/Buildings/Buildings";
import Settings from "./actions/views/Settings/Settings";
import Reporting from "./actions/views/Reporting/Reporting";
import Sidebar from "./actions/components/Sidebar/Sidebar";







function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Sidebar />

                <Routes>
                    <Route path="/" element={
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    } />

                    <Route path="/Buildings" element={<Buildings/>}/>
                    <Route path="/Settings" element={<Settings/>}/>
                    </Routes>

                <Footer />
            </BrowserRouter>

        </div>
    );
}

export default App;
