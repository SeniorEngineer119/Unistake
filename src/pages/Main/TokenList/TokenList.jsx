import React from 'react';

import TokenListContent from './TokenListContent';
import MediumLogo from 'static/images/mediumLogo.png';
import './TokenList.scss';

const TokenList = ({ tab, updateTab }) => {
  const renderTokeListContent = () => {
    if (tab === 'Top Up' || tab === 'Transfer' || tab === 'Lockup') {
      return (
        <div className="tokenlist-container_empty-content">
          <div className="text-center">
            <p className="medium-txt">
              Multiplier Balance
            </p>
            <p className="small-txt">
              0.00 UNISTAKE <br/>
              0.00 ETH
            </p>
          </div>
        </div>
      )
    }

    return <TokenListContent/>;
  }
  const tabNames = ["Top Up", "Transfer", "Lockup", "Traditional", "Withdraw"];
  return (
    <div className="tokenlist-container">
      <nav className="tokenlist-container_title navbar navbar-expand-sm">
        <img src={MediumLogo} alt="logo" />
        <button className="navbar-toggler d-md-none" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <div className="burger-bar" />
          <div className="burger-bar" />
          <div className="burger-bar" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            {tabNames.map((tabName, idx) => (
              <li className="nav-item" key={idx}>
                <div
                  className="nav-link"
                  data-toggle="collapse"
                  data-target="#collapsibleNavbar"
                  onClick={() => {
                    if (tab !== tabName) {
                      updateTab(tabName);
                    }
                  }}
                >
                  {tabName}
                </div>
              </li>
            ))} 
          </ul>
        </div>
      </nav>
      {renderTokeListContent()}
    </div>
  );
}


export default TokenList;
