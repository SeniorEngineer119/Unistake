import React from 'react';
import WhiteLogo from 'static/images/whitelogo.png';

import './Intro.scss';

const Intro = ({ tab }) => {
  return (
    <React.Fragment>
      <div className="centerbody-container_intro d-flex align-items-center">
        <div className="centerbody-container_intro_rect">
          UNISTAKE
        </div>
        <div className="centerbody-container_intro_token">
          <img src={WhiteLogo} alt="logo" />
        </div>
        <div className="centerbody-container_intro_text top-up-intro-text">
          Top Up Multipler
        </div>
      </div>
      <div className="centerbody-container_text_responsive">
        Top Up Multipler
      </div>
    </React.Fragment>    
  );
}


export default Intro;
