import React from 'react';

import LiquidityIcon from 'static/images/liquidity.png';
import './Intro.scss';

const Intro = ({ tab }) => {
  return (
    <React.Fragment>
      <div className="centerbody-container_intro d-flex align-items-center">
        <div className="centerbody-container_intro_rect">
          Example-Example Pair
        </div>
        <div className="centerbody-container_intro_token">
          <img src={LiquidityIcon} alt="logo" />
        </div>
        <div className="centerbody-container_intro_text tradition-intro-text">
          Provide Liquidity
          <p className="text-center">
            Via Unistake Traditional Contract
          </p>
        </div>
      </div>
      <div className="centerbody-container_text_responsive">
        Provide Liquidity
        <p className="text-center">
          Via Unistake Traditional Contract
        </p>
      </div>
    </React.Fragment>
  );
}


export default Intro;
