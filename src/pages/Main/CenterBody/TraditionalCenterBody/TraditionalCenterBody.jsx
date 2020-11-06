import React from 'react';

import Intro from './Intro';
import CenterForm from './CenterForm';
import './TraditionalCenterBody.scss';

const CenterBody = ({ tab }) => {
  return (
    <div className="content-body">
      <Intro/>
      <CenterForm/>
    </div>
  );
}


export default CenterBody;
