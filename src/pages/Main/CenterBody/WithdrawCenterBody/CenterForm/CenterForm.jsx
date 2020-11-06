import React from 'react'

import TokenSelect from 'components/TokenSelect';
import './CenterForm.scss';

const CenterForm = ({ tab }) => {
  return (
    <div className="centerform-two-columns-container withdraw-container centerform">
      <div className="centerform_subform">
        <div className="row">
          <div className="col-lg-6">

            <div className="input-area-with-header no-border">
              <div className="input-area-with-header_label">
                <h6>Staking Bonus1</h6>
              </div>            
            </div>          

            <div className="input-area mt-2">
              <div className="input-area_row">
                <div className="input-area_row_left_column">
                  Total
                </div>
                <div className="input-area_row_right_column">
                  
                </div>
              </div>
              <div className="input-area_row mt-5px">
                <div className="input-area_row_left_column">
                <input type="number" defaultValue={0.1} />
                </div>
                <div className="input-area_row_right_column">
                  <TokenSelect/>
                </div>
              </div>
            </div>

            
            <div className="input-area mt-4">
              <div className="input-area_row">
                <div className="input-area_row_left_column">
                  Available
                </div>
                <div className="input-area_row_right_column">
                  
                </div>
              </div>
              <div className="input-area_row mt-5px">
                <div className="input-area_row_left_column">
                <input type="number" defaultValue={0.011} />
                </div>
                <div className="input-area_row_right_column">
                  <TokenSelect />
                </div>
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <div className="input-area-with-header no-border">
              <div className="input-area-with-header_label">
                <h6>Staking Bonus2</h6>
              </div>            
            </div>          
            <div className="input-area mt-2">
              <div className="input-area_row">
                <div className="input-area_row_left_column">
                  Total
                </div>
                <div className="input-area_row_right_column">
                </div>
              </div>
              <div className="input-area_row mt-5px">
                <div className="input-area_row_left_column">
                <input type="number" defaultValue={500} />
                </div>
                <div className="input-area_row_right_column">
                  <TokenSelect />
                </div>
              </div>
            </div>
            
            <div className="input-area mt-4">
              <div className="input-area_row">
                <div className="input-area_row_left_column">
                  Available
                </div>
                <div className="input-area_row_right_column">
                </div>
              </div>
              <div className="input-area_row mt-5px">
                <div className="input-area_row_left_column">
                <input type="number" defaultValue={0.011} />
                </div>
                <div className="input-area_row_right_column">
                  <TokenSelect />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-lg-12">
            <div className="input-area-with-header mt-3">
              <div className="input-area-with-header_label ">
                Lockup Period
              </div>
              <div className="input-area-with-header_area">
                <p>
                  Current Day<br/>
                  37
                </p>
                <p>
                  Total Days<br/>
                  365
                </p>
              </div>
            </div>
          </div>
          
        </div>

        <div className="row mt-3">
          <button className="btn-form-submit">
            Withdraw Staking Bonuses
          </button>
        </div>
      </div>
    </div>
  );
}


export default CenterForm;
