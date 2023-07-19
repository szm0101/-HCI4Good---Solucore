import logo from './actions/assets/logo.svg';
import './App.css';
import Navbar from './actions/components/navbar/Navbar';
import './actions/components/navbar/Navbar.css';
import {BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import Buildings from "./actions/views/Buildings/Buildings";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />

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
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
