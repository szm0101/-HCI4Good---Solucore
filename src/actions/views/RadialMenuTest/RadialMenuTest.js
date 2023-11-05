import React from 'react';
import RadialMenu from '../../components/RadialMenu/RadialMenu'; 
import ElevatorCentralImage from "../../assets/elevator-central-image.png"

const RadialMenuTest = () => {
  return (
    <div className="App">
      <h1>Radial Menu Example</h1>
      <RadialMenu 
      imageSrc={ElevatorCentralImage} 
      // Dummy Data for GUI (REMOVE LATER AND MAKE DYNAMIC)
      bNumber="B# 19797" 
      deviceId="337"
      />
    </div>
  );
}
export default RadialMenuTest;
