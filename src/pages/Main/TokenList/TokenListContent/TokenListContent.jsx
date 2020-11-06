import React from 'react';
import SelectSearch  from 'react-select-search';

import tokens from 'constants/tokens';
import './TokenListContent.scss';

const renderToken = (props, option, snapshot, className) => {
  const imgStyle = {
    borderRadius: '50%',
    verticalAlign: 'middle',
    marginRight: 10,
  };

  return (
    <button {...props} className='token-list_item' type="button">
      <span><img alt="" style={imgStyle} width="32" height="32" src={option.icon} /><span>{option.name}</span></span>
    </button>
  );
}

const TokenListContent = ({ tab }) => {
  return (
    <div className="tokenlist-container_tokenlist-content">
      <p className="tokenlist-container_tokenlist-content_title">
        Select a pair to provide liquiidty to.
      </p>
      <div className="tokenlist-container_tokenlist-content_body">
        <SelectSearch          
          renderOption={renderToken}
          options={tokens}
          search
          emptyMessage="Not found"
          placeholder="Search"
          printOptions="always"
        />
      </div>
      
      <p className="tokenlist-container_tokenlist-content_bottom text-center">
        If you cannot find a pair it is not currently available.
      </p>
    </div>
  );
}


export default TokenListContent;
