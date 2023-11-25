import React from "react";
import './Data.css';
import { useState, useEffect } from "react";

function Devices(props) {

  const [numDevices, setNumDevices] = useState(null);

  //turn this into a function
  
  useEffect(() => {
    // Update numDevices when props.buildingDevices changes
    setNumDevices(props.buildingDevices.length);
  }, 
  [props.buildingDevices]); // This dependency will trigger the useEffect when it changes

  const boxes = Array.from({ length: numDevices || 0 }, (_, index) => (
    <div key={index} className="box">
      {/* Content inside each box */}
      Device {index + 1}
    </div>
  ));

  return (
    <body>
        <div class="devices">

        {boxes}
        </div>
    </body>
  );
}

export default Devices;