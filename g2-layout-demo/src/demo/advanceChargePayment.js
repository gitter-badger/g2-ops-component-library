import React from 'react'
import { AutoSelect, TextField } from 'ops-portal-component-library'
import { yesNoOptions, yesNoDescriptions } from './autoSelectOptionsRefData'
import style from './style'
import './billingAndPickup.css'

class AdvanceChargePayment extends React.Component {
  state = {
    'Are There Advance Charges?': '',
    'Responsible Party': '',
    'Advance Charges Paid': ''
  } 
  render() {
    return (
      <div>
        <div className="section header">
          <span style={{ paddingLeft: '10px' }}>Advance Charge Payment</span>
        </div>
        <div className="wrapper">
          <div className="footer">
            <div style={style.fieldGroup}>
              <span style={style.fieldLabel}>Are There Advance Charges?*: </span>
              <span style={style.autoSelectField}>
                <AutoSelect
                  name={'Are There Advance Charges?'}
                  placeholder={'Are There Advance Charges?'}
                  options={yesNoOptions}
                  disabled={false}
                  displayOption={(code) => yesNoDescriptions[code].desc}
                  value={this.state['Are There Advance Charges?']}
                  onChange={(value) => this.setState({ 'Are There Advance Charges?': value })}
                  optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                  width={200}
                />
              </span>
            </div>
            <div style={style.fieldGroup}>
              <span style={style.fieldLabel}>Responsible Party*: </span>
              <span style={style.autoSelectField}>
                <TextField
                  autoAdjustHeight
                  disabled={false}
                  resizable={false}
                  rows={2}
                  placeholder={'Responsible Party'}
                />
              </span>
            </div>
            <div style={style.fieldGroup}>
              <span style={style.fieldLabel}>Advance Charges Paid*: </span>
              <span style={style.autoSelectField}>
                <AutoSelect
                  name={'Advance Charges Paid'}
                  placeholder={'Advance Charges Paid'}
                  options={yesNoOptions}
                  disabled={false}
                  displayOption={(code) => yesNoDescriptions[code].desc}
                  value={this.state['Advance Charges Paid']}
                  onChange={(value) => this.setState({ 'Advance Charges Paid': value })}
                  optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                  width={200}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdvanceChargePayment
