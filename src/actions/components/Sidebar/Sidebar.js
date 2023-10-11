import React, {useState} from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom";
import HomeIcon from "../../assets/home-icon.png";
import BuildingIcon from "../../assets/building-icon.png";
import SettingIcon from "../../assets/settings-icon.png";


function Sidebar() {
  const activePagePaths = {
    "/Home" : "Home",
    "/buildings" : 'Building',
    "/settings" : 'Settings'
  }

  const [activeIcon, setActiveIcon] = useState(activePagePaths[window.location.pathname]);
  
  const toggleOpacity = (name) => {
    setActiveIcon(name);
  }

  return(
    <div className="sidebar">
      <ul>
          <li onClick={() => toggleOpacity('Home')}><Link to="/Home" ><img src={HomeIcon} alt='Home Icon'  className={activeIcon === 'Home' ? 'active' : null} /></Link></li>
          <li onClick={() => toggleOpacity('Building')}><Link to="/buildings"><img src={BuildingIcon} alt='Building Icon'  className={activeIcon === 'Building' ? 'active' : null} /></Link></li>
          <li onClick={() => toggleOpacity('Settings')}><Link to="/settings"><img src={SettingIcon} alt='Settings Icon'  className={activeIcon === 'Settings' ? 'active' : null} /></Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;