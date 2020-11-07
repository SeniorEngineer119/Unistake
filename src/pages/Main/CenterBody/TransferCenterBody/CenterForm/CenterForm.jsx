import React from 'react';

import TokenSelect from 'components/TokenSelect';
import InputWithButton from 'components/InputWithButton';
import './CenterForm.scss';

const Header = ({ tab }) => {
  return (
    <div className="one-column-form centerform">
      <div className="centerform_subform">
        <p className="text-center">Transfer Or Withdraw</p>
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

        <div className="row btn-form-submit-group">
          <div className="col">
            <button className="btn-form-submit mt-3 text-center">
              Transfer
            </button>
          </div>
          <div className="col">
            <button className="btn-form-submit mt-3 text-center">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="centerform_subform mt-3">
        <div className="btn-form-intro text-center">
          <span role="img" aria-label="star">
            ⭐&nbsp;&nbsp;
          </span>
          Transfering your top up balance will add it to your multiplier, the
          balance will be added to any active locks.
        </div>
      </div>
    </div>
  );
};

export default Header;
