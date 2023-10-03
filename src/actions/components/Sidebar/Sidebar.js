import React, {useState} from 'react';
import "./Sidebar.css"
import {Link} from "react-router-dom";
import HomeIcon from "../../assets/home-icon.png";
import BuildingIcon from "../../assets/building-icon.png";
import SettingIcon from "../../assets/settings-icon.png";


function Sidebar() {
  const [activeIcon, setActiveIcon] = useState('Home');

  const toggleOpacity = (name) => {
    setActiveIcon(name);
  }

  return(
    <div className="sidebar">
      <ul>
          <li><Link to="/"><img src={HomeIcon} alt='Home Icon' onClick={() => toggleOpacity('Home')} className={activeIcon === 'Home' ? 'active' : null} /></Link></li>
          <li><Link to="/buildings"><img src={BuildingIcon} alt='Building Icon' onClick={() => toggleOpacity('Building')} className={activeIcon === 'Building' ? 'active' : null} /></Link></li>
          <li><Link to="/settings"><img src={SettingIcon} alt='Settings Icon' onClick={() => toggleOpacity('Settings')} className={activeIcon === 'Settings' ? 'active' : null} /></Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;