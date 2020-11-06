import React from 'react'

import TokenSelect from 'components/TokenSelect';
import './CenterForm.scss';

const CenterForm = ({ tab }) => {
  return (
    <div className="centerform-two-columns-container centerform">
      <div className="centerform_subform">
        <div className="row">
          <div className="col-lg-6">
            {/* // Add liquidity */}
            <div className="input-area-with-header no-border">
              <div className="input-area-with-header_label">
                <h6>Add Liquidity</h6>
              </div>            
            </div> 
          </div>
          <div className="col-lg-6">
            <div className="input-area-with-header no-border">
              <div className="input-area-with-header_label">
                <h6>Select Staking Period</h6>
              </div>            
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* // Add liquidity */}
            <div className="input-area mt-2">
              <div className="input-area_row">
                <div className="input-area_row_left_column">
                  Input
                </div>
                <div className="input-area_row_right_column top-right-ab-pos">
                  Balance: 1.000002
                </div>
              </div>
              <div className="input-area_row mt-5px">
                <div className="input-area_row_left_column">
                <input type="number" defaultValue={1.0000021} />
                </div>
                <div className="input-area_row_right_column">
                  <TokenSelect />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="input-area-with-header mt-auto w-100">
              <div className="input-area-with-header_area">
                <div class="">
                  <p>30<br/>Days</p>
                  <input type="radio" checked="checked" name="radio"/>
                  <span class="checkmark"></span>
                </div>
                <div class="">
                  <p>90<br/>Days</p>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </div>
                <div class="">
                  <p>180<br/>Days</p>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </div>
                <div class="">
                  <p>365<br/>Days</p>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </div>
                <div class="">
                  <p>MULTIPLER</p>
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {/* Select Token */}
            <p className="text-center mt-3">Select Token</p>
            <div className="input-area mt-2">
              <div className="input-area_row">
                <div className="input-area_row_left_column">
                  Input
                </div>
                <div className="input-area_row_right_column top-right-ab-pos">
                  Balance: 635.00028
                </div>
              </div>
              <div className="input-area_row mt-5px">
                <div className="input-area_row_left_column">
                <input type="number" defaultValue={192.12400} />
                </div>
                <div className="input-area_row_right_column">
                  <TokenSelect />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex">
            <div className="input-area-with-header mt-auto w-100">
              <div className="input-area-with-header_label ">
                Return in ETH based on length of stake
              </div>
              <div className="input-area-with-header_area">
                <p>
                  0.33% <br/>
                  Daily
                </p>
                <p>
                  1% <br/>
                  Monthly
                </p>
                <p>
                  12% <br/>
                  Yearly
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">

            <div className="input-area-with-header mt-4">
              <div className="input-area-with-header_label ">
                Price and share of pools
              </div>
              <div className="input-area-with-header_area">
                <p>
                  192.124 <br/>
                  Example Per ETH
                </p>
                <p>
                  1 <br/>
                  ETH Per EXAMPLE
                </p>
                <p>
                  0.06% <br/>
                  Share Of Pool
                </p>
              </div>
            </div>

          </div>
          <div className="col-lg-6">
            <div className="input-area-with-header mt-4">
              <div className="input-area-with-header_label ">
                Return in EXAMPLE based on length of stake
              </div>
              <div className="input-area-with-header_area">
                <p>
                  0.33% <br/>
                  Daily
                </p>
                <p>
                  10% <br/>
                  Monthly
                </p>
                <p>
                  120% <br/>
                  Yearly
                </p>
              </div>
            </div>          
          </div>
        </div>

        <div className="row mt-4">
          {/* <div className="btn-form-intro text-center w-100pc">
            RETURNS DO NOT INCLUDE RETURNS RECEIVED FROM UNISWAP TRADING FEES
          </div> */}
          <button className="btn-form-submit mt-2">
            Enter Pool & Stake
          </button>
        </div>
      </div>
    </div>
  );
}


export default CenterForm;
