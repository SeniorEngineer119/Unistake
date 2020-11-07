import React from 'react';

import TokenSelect from 'components/TokenSelect';
import InputWithButton from 'components/InputWithButton';
import './CenterForm.scss';

const Header = ({ tab }) => {
  return (
    <div className="one-column-form centerform">
      <div className="centerform_subform">
        <p className="text-center">Top Up</p>
        <div className="input-area mt-2">
          <div className="input-area_row">
            <div className="input-area_row_left_column">Input Amount</div>
            <div className="input-area_row_right_column"></div>
          </div>
          <div className="input-area_row mt-5px">
            <div className="input-area_row_left_column">
              <InputWithButton maxValue={0} />
              {/* <input type="number" defaultValue={0} /> */}
            </div>
            <div className="input-area_row_right_column">
              <TokenSelect />
            </div>
          </div>
        </div>

        <p className="text-center mt-2">Pending Top Ups</p>
        <div className="input-area mt-2">
          <div className="input-area_row">
            <div className="input-area_row_left_column">Balance</div>
            <div className="input-area_row_right_column"></div>
          </div>
          <div className="input-area_row mt-5px">
            <div className="input-area_row_left_column">
              <InputWithButton maxValue={0} />
              {/* <input type="number" defaultValue={0} /> */}
            </div>
            <div className="input-area_row_right_column">
              <TokenSelect />
            </div>
          </div>
        </div>

        <div className="input-area-with-header mt-3">
          <div className="input-area-with-header_label" style={{ padding: 15 }}>
            Time Until Maturity
          </div>
          <div className="input-area-with-header_area" style={{ padding: 15 }}>
            00h 00m 00s
          </div>
        </div>

        <button className="btn-form-submit mt-3 text-center">Top Up</button>
      </div>

      <div className="centerform_subform mt-3">
        <div className="btn-form-intro">
          <span role="img" aria-label="star">
            ⭐&nbsp;&nbsp;
          </span>
          Top ups will reach maturity after 24 hours at which time you can
          transfer them to your multiplier. Note: Adding additional top ups will
          restart the timer on pending top ups.
        </div>
      </div>
    </div>
  );
};

export default Header;
