import React from 'react';
import WhiteLogo from 'static/images/whitelogo.png';

import './Intro.scss';

const Intro = ({ tab }) => {
  return (
    <div className="centerbody-container_intro">
      <div className="first-section pl-20px">
        <div className="bg-blue-gradient ">
          <h2>UNISTAKE</h2>
          <img src={WhiteLogo} alt="logo" />
        </div>
        
      </div>
      <div className="bg-blue-gradient second-section">
        
      </div>
      <div className="third-section tradition-intro-text">
        Top Up Multipler
        <p className="text-center">
          Join a Uniswap Liquidity Pools and Stake
        </p>
      </div>
    </div>      
  );
}


export default Intro;
