import React from 'react'

import Header from './Header';
import TransferCenterBody from './TransferCenterBody';
import TopUpCenterBody from './TopUpCenterBody';
import LockupCenterBody from './LockupCenterBody';
import TraditionalCenterBody from './TraditionalCenterBody';
import WithdrawCenterBody from './WithdrawCenterBody';
import './CenterBody.scss';

const CenterBody = (props) => {
  const renderCenter = (tab) => {
    if (tab === 'Top Up') {
      return <TopUpCenterBody {...props} />
    }
    if (tab === 'Transfer') {
      return <TransferCenterBody {...props}/>
    }
    if (tab === 'Lockup') {
      return <LockupCenterBody {...props} />
    }
    if (tab === 'Traditional') {
      return <TraditionalCenterBody {...props} />
    }
    if (tab === 'Withdraw') {
      return <WithdrawCenterBody {...props} />
    }
  }
  return (      
    <div className="centerbody-container">
      <Header/>
      {renderCenter(props.tab)}
    </div>    
  )
  
}

export default CenterBody;