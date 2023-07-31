import React from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom";

function Sidebar() {
  return(
    <div class="sidebar">
      <ul>
        <li><a href="http://solutrak.solucore.com/#/dashboard">Home</a></li>
        <li><a href="http://solutrak.solucore.com/#/buildings">Building</a></li>
          <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;