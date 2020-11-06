import React from 'react';

import UnistakIcon from 'static/tokens/unistake-token.png';
import './TokenSelect.scss';

const TokenSelect = () => {
  return (
    <div className="token-select">
      <img src={UnistakIcon} alt="unistake" />
      <div className="token-select_txt-are">UNISTAKE</div>
    </div>
  );
};

export default TokenSelect;
