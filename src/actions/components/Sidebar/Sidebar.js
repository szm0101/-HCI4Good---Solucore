import React from 'react';
import "./Sidebar.css"

function Sidebar() {
  return(
    <div class="sidebar">
      <ul>
        <li><a href="http://solutrak.solucore.com/#/dashboard">Home</a></li>
        <li><a href="http://solutrak.solucore.com/#/buildings">Building</a></li>
        <li><a href="http://solutrak.solucore.com/#/settings">Setting</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;