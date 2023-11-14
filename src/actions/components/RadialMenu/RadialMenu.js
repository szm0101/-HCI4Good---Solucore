import React from 'react';
import './RadialMenu.css';
import HexagonButton from '../../components/HexagonButton/HexagonButton';
import DoorOpenIcon from "../../assets/elevator-door-open.png";
import DownArrow from "../../assets/down-arrow.png";
import UpArrow from "../../assets/up-arrow.png";
import InfoIcon from "../../assets/info.png";
import CameraIcon from "../../assets/icon_device_camera.png";
import FloorIcon from "../../assets/1-yellow.png";


// Menu items configuration
const menuItems = [
  { id: "doors-button", label: 'DOORS', imageSrc: DoorOpenIcon },
  { id: "direction-button", label: 'DIRECTION', imageSrc: UpArrow, imageSrc2: DownArrow },
  { id: "camera-button", label: 'CAMERA', imageSrc: CameraIcon },
  { id: "position-button", label: 'POSITION', imageSrc: FloorIcon },
  { id: "info-button", label: '', imageSrc: InfoIcon },
];


const RadialMenu = ({ imageSrc, bNumber, deviceId }) => {
  // Placeholder for default image, replace 'path_to_some_default_image' with your actual default image path
  const defaultImage = 'path_to_some_default_image';


  return (
    <div className="radial-menu-container">
      <div className='ring'>
        <div className="radial-menu">
          <div className="temperature-gauge">
            <svg className="temperature-container" viewBox="280 360 200 240" xmlns="http://www.w3.org/2000/svg">
              <path d={'M440.739 367l-18.253 9.174C353.717 410.736 311 480.167 311 557.373v20.621l40.82-.115V557.373a160.821 160.821 0 0 1 88.93-144.521L459 403.677Zm-1.513 42.8a164.221 164.221 0 0 0-90.811 147.578v17.1l-34.017.1V557.373c0-75.9 42-144.164 109.61-178.143l15.211-7.645 15.218 30.565'} />
            </svg>
            <svg className="temperature-value" viewBox="-280 -105 175 200" xmlns="http://www.w3.org/2000/svg">
              <path className="temperature-value-svg" d="M-204.96877750706022 3.5777433196431048A205 205 0 0 1 -189.9383693287266 -77.12597394357009L-171.40779671128985 -69.60148868078277A185 185 0 0 0 -184.9718236039324 3.228695190897436Z" fill="none" stroke="black" strokeWidth="2" />
            </svg>
            <div>
              <h3 class="temp-info-celsius">35°C</h3>
              <h3 class="temp-info-farenheit">95°F</h3>
            </div>
          </div>


          {/* Map over the menuItems to render HexagonButtons */}
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item-container">


              <HexagonButton imgSrc={item.imageSrc} imgSrc2={item.imageSrc2} label={item.label} />


            </div>
          ))}

          <div className="third-ring">
            <div className="second-ring">
              <div className="inner-ring">
                {/* Use the imageSrc prop to dynamically set the image, or use a default if no imageSrc is provided */}
                <img src={imageSrc || defaultImage} alt="Device Icon" className="device-image" />
                <div className="device-info">
                  <div><h3>{bNumber}</h3></div>
                  <div>DEVICE ID: {deviceId}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


export default RadialMenu;