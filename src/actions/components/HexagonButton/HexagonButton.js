import React from 'react';
import './HexagonButton.css';

const HexagonButton = ({ imgSrc, imgSrc2, label, size = 50, onClick, floorLevel }) => {
  const imageSize = size * 0.75;
  const position = (100 - imageSize) / 2;



  // return (
  //   <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
  //     <path d={'M325 47C 271 47 222 75 195 122C 195 122 20 425 20 425C -7 471 -7 529 20 575C 20 575 195 878 195 878C 222 925 271 953 325 953C 325 953 675 953 675 953C 729 953 778 925 805 878C 805 878 980 575 980 575C 1007 529 1007 471 980 425C 980 425 805 122 805 122C 778 75 729 47 675 47C 675 47 325 47 325 47C 325 47 325 47 325 47M 0,0'} />
  //   </svg>
  // );


  return (
    <div className="hexagon-container">
      <svg viewBox="0 -1 100 102" className="hexagon-svg" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      <path d="M 32.5 4.7C 27.1 4.7 22.2 7.5 19.5 12.2C 19.5 12.2 2.0 42.5 2.0 42.5C -0.7 47.1 -0.7 52.9 2.0 57.5C 2.0 57.5 19.5 87.8 19.5 87.8C 22.2 92.5 27.1 95.3 32.5 95.3C 32.5 95.3 67.5 95.3 67.5 95.3C 72.9 95.3 77.8 92.5 80.5 87.8C 80.5 87.8 98.0 57.5 98.0 57.5C 100.7 52.9 100.7 47.1 98.0 42.5C 98.0 42.5 80.5 12.2 80.5 12.2C 77.8 7.5 72.9 4.7 67.5 4.7C 67.5 4.7 32.5 4.7 32.5 4.7C 32.5 4.7 32.5 4.7 32.5 4.7M 0,0" transform="rotate(90,50,50)" stroke="#833839" fill="#011729" />
        <foreignObject x="0" y="0" width="100" height="100">
          <div className="image-container">
            {imgSrc && <img src={imgSrc} className="hexagon-image" alt="Hexagon Icon 1" />}
            {imgSrc2 && <img src={imgSrc2} className="hexagon-image" alt="Hexagon Icon 2" />}
            {floorLevel && <h3 className='text-white mt-1'>{floorLevel}</h3>}
          </div>
        </foreignObject>
      </svg>
      <div className="hexagon-label">{label}</div>
    </div>
  );
};

export default HexagonButton;
