import React from 'react';

import TokenSelect from 'components/TokenSelect';
import InputWithButton from 'components/InputWithButton';
import './CenterForm.scss';

const Header = ({ tab }) => {
  // const [data, setData] = useState(0);

  return (
    <div className="one-column-form centerform">
      <div className="centerform_subform">
        <p className="text-center">Lockup Or Withdraw</p>
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
            Active Lockup Period
          </div>
          <div className="input-area-with-header_area" style={{ padding: 15 }}>
            00h 00m 00s
          </div>
        </div>

        <div className="input-area-with-header mt-3">
          <div className="input-area-with-header_label ">Lockup Multiplier</div>

          <div className="input-area-with-header_area">
            <div className="container">
              <p>
                30
                <br />
                Days
              </p>
              <input type="radio" checked="checked" name="radio" />
              <span className="checkmark"></span>
            </div>
            <div className="container">
              <p>
                90
                <br />
                Days
              </p>

              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </div>
            <div className="container">
              <p>
                180
                <br />
                Days
              </p>
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </div>
            <div className="container">
              <p>
                365
                <br />
                Days
              </p>
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </div>
          </div>
        </div>

        <div className="row btn-form-submit-group">
          <div className="col">
            <button className="btn-form-submit mt-3 text-center">Lockup</button>
          </div>
          <div className="col">
            <button className="btn-form-submit mt-3 text-center">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      <div className="centerform_subform mt-3">
        <div className="btn-form-intro">
          <span role="img" aria-label="star">
            ⭐&nbsp;&nbsp;
          </span>
          Locking up your multipler will be result in the iriversable locking of
          all tokens in your balance. Each additional lock up will restart the
          lock up period of all tokens.
        </div>
      </div>
    </div>
  );
};

export default Header;
