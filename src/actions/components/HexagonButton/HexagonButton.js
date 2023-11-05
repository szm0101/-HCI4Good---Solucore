import React from 'react';
import './HexagonButton.css';

const HexagonButton = ({ imgSrc, imgSrc2, label, size = 50 }) => {
  const imageSize = size * 0.75;
  const position = (100 - imageSize) / 2;



  // return (
  //   <svg viewBox="0 0 500 600" xmlns="http://www.w3.org/2000/svg">
  //     <path d={'M325 47C 271 47 222 75 195 122C 195 122 20 425 20 425C -7 471 -7 529 20 575C 20 575 195 878 195 878C 222 925 271 953 325 953C 325 953 675 953 675 953C 729 953 778 925 805 878C 805 878 980 575 980 575C 1007 529 1007 471 980 425C 980 425 805 122 805 122C 778 75 729 47 675 47C 675 47 325 47 325 47C 325 47 325 47 325 47M 0,0'} />
  //   </svg>
  // );


  return (
    <div className="hexagon-container">
      <svg viewBox="0 0 100 100" className="hexagon-svg" onClick={() => { alert('Hexagon clicked!'); }}>
        <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" stroke="#833839" fill="#011729" />
        <foreignObject x="0" y="0" width="100" height="100">
          <div className="image-container">
            <img src={imgSrc} className="hexagon-image" alt="Hexagon Icon 1" />
            {imgSrc2 && <img src={imgSrc2} className="hexagon-image" alt="Hexagon Icon 2" />}
          </div>
        </foreignObject>
      </svg>
      <div className="hexagon-label">{label}</div>
    </div>
  );
};

export default HexagonButton;
