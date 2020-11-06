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
        <div className="centerbody-container_intro_text transfer-intor-text">
          Transfer To Multiplier
          {/* <p className="text-center">
            Via Unistake Traditional Contract
          </p> */}
        </div>
      </div>
      <div className="centerbody-container_text_responsive ">
        Transfer To Multiplier
        {/* <p className="text-center">
          Via Unistake Traditional Contract
        </p> */}
      </div>
    </React.Fragment>
  );
}


export default Intro;
