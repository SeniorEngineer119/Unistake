import React from 'react';

import Intro from './Intro';
import CenterForm from './CenterForm';

import './TopUpCenterBody.scss';

const TopUpCenterBody = ({ tab }) => {
  return (
    <React.Fragment>
      <Intro/>
      <CenterForm />
    </React.Fragment>
  );
}


export default TopUpCenterBody;
