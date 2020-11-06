import React from 'react';
import TopUpIcon from 'static/images/topup.png';
import Traditional from 'static/images/traditional.png';
import TransferIcon from 'static/images/transfer.png';
import LockupIcon from 'static/images/lockup.png';
import withdraw from 'static/images/withdraw.png';


import './SideTabs.scss';

const TabItem = ({name, icon, currentTabName, classname, updateTab}) => {
  const className = name === currentTabName ? `${classname} selected-tab` : classname
  return (
    <div className={className} onClick={() => {
      if (currentTabName !== name) {
        updateTab(name);
      }
    }}>
      <div className="sidetabs-container_tab_image">
        <img src={icon} alt="tab" />
      </div>
      <div className="sidetabs-container_tab_text">
        {name}
      </div>
    </div>
  )
}

const SideTabs = ({ tab, updateTab }) => {
  return (
    <div className="sidetabs-container">
      <div className="sidetabs-container_title">
        Multipler
      </div>
      <TabItem
        name="Top Up"
        icon={TopUpIcon}
        classname="sidetabs-container_tab tab-first"
        currentTabName={tab}
        updateTab={updateTab}
      />
      <TabItem
        name="Transfer"
        icon={TransferIcon}
        classname="sidetabs-container_tab"
        currentTabName={tab}
        updateTab={updateTab}
      />
      <TabItem
        name="Lockup"
        icon={LockupIcon}
        classname="sidetabs-container_tab tab-last"
        currentTabName={tab}
        updateTab={updateTab}
      />

      <div className="sidetabs-container_title second-title">
        Liquity
      </div>
      <TabItem
        name="Traditional"
        icon={Traditional}
        classname="sidetabs-container_tab tab-first tab-last"
        currentTabName={tab}
        updateTab={updateTab} 
      />

      <div className="sidetabs-container_title third-title">
        Stakes
      </div>

      <TabItem
        name="Withdraw"
        icon={withdraw}
        classname="sidetabs-container_tab tab-first tab-last"
        currentTabName={tab}
        updateTab={updateTab}
      />
    </div>
  );
}


export default SideTabs;
