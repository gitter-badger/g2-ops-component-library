import React from 'react'
import { AutoSelect, TextField, DatePicker } from 'ops-portal-component-library'
import { towProviderOptions, towProviderDescriptions } from './autoSelectOptionsRefData'
import style from './style'
import './billingAndPickup.css'

const fields = ['Select Tow Provider', 'Scheduled Trip Date', 'Promised Trip Date', 'Trip Date', 'Trip Distance', 'Unit']

class TowProvider extends React.Component {
  state = {
    'Select Tow Provider': '',
    'Scheduled Trip Date': '',
    'Promised Trip Date': '',
    'Trip Date': '',
    'Trip Distance': '',
    'Unit': '',
  }
  render() {
    return (
      <div>
        <div className="section header">
          <span style={{ paddingLeft: '10px' }}>Tow Provider</span>
        </div>
        <div className="wrapper">
          <div className="footer">
            <div style={style.fieldGroup}>
                <span style={style.fieldLabel}>Select Tow Provider*: </span>
                <span style={style.autoSelectField}>
                  <AutoSelect
                    name={'Select Tow Provider'}
                    options={towProviderOptions}
                    placeholder={'Select Tow Provider'}
                    value={this.state['Select Tow Provider']}
                    disabled={false}
                    onChange={(value) => this.setState({ 'Select Tow Provider': value })}
                    displayOption={(code) => towProviderDescriptions[code].desc}
                    optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                  />
                </span>
              </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default TowProvider
