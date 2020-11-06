import React, { useState } from 'react'

import SideTabs from './SideTabs';
import CenterBody from './CenterBody';
import TokenList from './TokenList';
import './MainPage.scss';

export default function Main() {
  const [tab, setTab] = useState('Top Up');

  return (
    <div className="main-container">
      <div className="left-side">
        <SideTabs tab={tab} updateTab={(newTab) => setTab(newTab)}/>
      </div>
      
      <div className="center-body">
        <CenterBody tab={tab} />
      </div>
      <div className="right-side">
        <TokenList tab={tab} />
      </div>      
    </div>
  );
}
