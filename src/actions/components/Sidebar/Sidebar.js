import React from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom";

function Sidebar() {
  return(
    <div class="sidebar">
      <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/buildings">Buildings</Link></li>
          <li><Link to="/Alerts">Alerts</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/Report">Report</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;