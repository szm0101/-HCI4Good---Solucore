import React from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom";
import HomeIcon from "../../assets/home-icon.png";
import BuildingIcon from "../../assets/building-icon.png"
import SettingIcon from "../../assets/settings-icon.png"

function Sidebar() {
  return(
    <div class="sidebar">
      <ul>
          <li><Link to="/"><img src={HomeIcon} alt='Home Icon'/></Link></li>
          <li><Link to="/buildings"><img src={BuildingIcon} alt='Building Icon'/></Link></li>
          <li><Link to="/settings"><img src={SettingIcon} alt='Settings Icon'/></Link></li>
          <li><Link to="/Alerts">Alerts</Link></li>
          <li><Link to="/Report">Report</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;