import React from 'react';

import TokenListContent from './TokenListContent';
import MediumLogo from 'static/images/mediumLogo.png';
import './TokenList.scss';

const TokenList = ({ tab }) => {
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
  return (
    <div className="tokenlist-container">
      <div className="tokenlist-container_title">
        <img src={MediumLogo} alt="logo" />
      </div>
      {renderTokeListContent()}
    </div>
  );
}


export default TokenList;
