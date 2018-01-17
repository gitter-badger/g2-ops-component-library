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
      <div style={{ display: 'table', width: '100%' }}>
        <div className="section header">
          <span style={{ paddingLeft: '10px' }}>Pickup Details</span>
        </div>

        <section className="col-1-1" style={{ padding: '0px' }}>
          <div className="col-1-2" style={{ padding: '5px 0 5px' }}>
            <div style={{ backgroundColor: '#f4f4f4', padding: '15px', height: '280px' }}>
              {basicFields.map(fieldKey => (
                <div key={`div-${fieldKey}`}>
                  <span>{fieldKey}*: </span>
                  <span>
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
          </div>
          <div className="col-1-2" style={{ padding: '5px 0 5px 5px' }}>
            <div style={{ backgroundColor: '#f4f4f4', padding: '15px', height: '280px' }}>
              <span>Location*: </span>
              <span>
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
          <div className="col-1-1" style={{ padding: '15px', backgroundColor: '#f4f4f4' }}>
            <span>
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
        </section>
      </div>
    )
  }
}
export default PickupDetails
