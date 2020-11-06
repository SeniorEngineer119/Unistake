import React from 'react';
import WhiteLogo from 'static/images/whitelogo.png';

import './Intro.scss';

const Intro = ({ tab }) => {
  return (
    <div className="centerbody-container_intro">
      <div className="first-section">
        <div className="intro-left">
          <div className="intro-left_text">
            UNISTAKE
          </div>
          <div className="intro-left_token">
            <img src={WhiteLogo} alt="logo" />
          </div>        
        </div>        
      </div>
      <div className="second-section top-up-intro-text">
        Top Up Multipler
      </div>
    </div>      
  );
}


export default Intro;
