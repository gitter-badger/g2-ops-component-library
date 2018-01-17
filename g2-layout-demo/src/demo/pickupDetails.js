import React from 'react'
import { AutoSelect, TextField } from 'ops-portal-component-library'
import { yesNoOptions, yesNoDescriptions, locationOptions, locationDescriptions } from './autoSelectOptionsRefData'
import style from './style'
import './billingAndPickup.css'

const basicFields = ['Pickup Required', 'Residence', 'Tow Type', 'Towable', 'Keys']

class PickupDetails extends React.Component {
  state = {
    'Pickup Required': '',
    'Residence': '',
    'Tow Type': '',
    'Towable': '',
    'Keys': '',
    'Location': '',
  }
  render() {
    const disabled = false
    return (
      <div>
      <div className="section header">
        <span style={{ paddingLeft: '10px' }}>Pickup Details</span>
      </div>
      <div className="wrapper">
        <div className="aside aside-1">
          {basicFields.map(fieldKey => (
            <div key={`div-${fieldKey}`} style={style.fieldGroup}>
              <span style={style.fieldLabel}>{fieldKey}*: </span>
              <span style={{ width: '100%' }}>
                <AutoSelect
                  key={`autoselect-${fieldKey}`}
                  name={fieldKey}
                  placeholder={fieldKey}
                  options={yesNoOptions}
                  disabled={disabled}
                  displayOption={(code) => yesNoDescriptions[code].desc}
                  value={this.state[fieldKey]}
                  onChange={(value) => this.setState({ [fieldKey]: value })}
                  optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                  width={200}
                />
              </span>
            </div>
          ))}
        </div>
        <div className="main">
          <div style={style.fieldGroup}>
            <span style={style.fieldLabel}>Location*: </span>
            <span style={{ width: '100%' }}>
              <AutoSelect
                name="Location"
                options={locationOptions}
                placeholder={'Location'}
                value={this.state.Location}
                disabled={disabled}
                onChange={(value) => this.setState({ 'Location': value })}
                displayOption={(code) => locationDescriptions[code].desc}
                optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                width={200}
              />
            </span>
          </div>
        </div>
        <div className="footer">
          <div style={style.fieldGroup}>
            <span style={style.fieldLabel}>
              Special Transport Instructions:
            </span>
            <span style={{ width: '100%' }}>
              <TextField
                multiline
                autoAdjustHeight
                disabled={disabled}
                resizable={false}
                rows={2}
                placeholder={'Special Transport Instructions'}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
    )    
  }
}
export default PickupDetails
