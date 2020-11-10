import React from 'react';
import SmallLogo from 'static/images/smallLogo.png';
import MetaIcon from 'static/images/metamask-icon.png';

import './MobileHeader.scss';

const MobileHeader = ({ tab }) => {
  return (
    <div className="centerbody-container_header-mobile row">
      <div className="address-wrapper col-md-6 col-sm-12">
        <div className="address-wrapper_first-section">
          <span className="address-wrapper_title hide_responsive">
            Connected Contract
          </span>
          <img src={SmallLogo} width="30px" alt="logo" />
        </div>        
        <div className="address-wrapper_second-section">
          <p className="address-wrapper_title show_responsive">
            Connected Address
          </p>
          <div className="input-gradient-wrapper">
            <div className="input-gradient">
              <input type="text" />
            </div>
          </div>
        </div>        
      </div>

      <div className="address-wrapper col-md-6 col-sm-12">
        <div  className="address-wrapper_first-section">
          <span className="address-wrapper_title hide_responsive">
            Connected Address
          </span>
          <img src={MetaIcon} width="30px" alt="logo" />
        </div>        
        <div className="address-wrapper_second-section">
          <p className="address-wrapper_title show_responsive">
            Connected Address
          </p>
          <div className="input-gradient-wrapper">
            <div className="input-gradient">
              <input type="text" />
            </div>
          </div>
        </div>        
      </div>
    </div>
  );
}


export default MobileHeader;
