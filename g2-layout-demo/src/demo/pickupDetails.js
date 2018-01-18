import React from 'react'
import { AutoSelect, TextField } from 'ops-portal-component-library'
import ComponentWithLabel from './componentLabelWrapper'
import { yesNoOptions, yesNoDescriptions, locationOptions, locationDescriptions } from './autoSelectOptionsRefData'
// import style from './style'
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
            <div style={{ backgroundColor: '#f4f4f4', padding: '15px', height: 'auto' }}>
              {basicFields.map(fieldKey => (
                <ComponentWithLabel
                  Component={AutoSelect}
                  key={`autoselect-${fieldKey}`}
                  name={fieldKey}
                  required
                  label={fieldKey}
                  placeholder={fieldKey}
                  options={yesNoOptions}
                  disabled={disabled}
                  displayOption={(code) => yesNoDescriptions[code].desc}
                  value={this.state[fieldKey]}
                  onChange={(value) => this.setState({ [fieldKey]: value })}
                  optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                  width={200}
                />
              ))}
            </div>
          </div>
          <div className="col-1-2" style={{ padding: '5px 0 5px 5px' }}>
            <div style={{ backgroundColor: '#f4f4f4', padding: '15px', height: '220px' }}>
              <ComponentWithLabel
                Component={AutoSelect}
                name="Location"
                label="Location"
                required
                options={locationOptions}
                placeholder={'Location'}
                value={this.state.Location}
                disabled={disabled}
                onChange={(value) => this.setState({ 'Location': value })}
                displayOption={(code) => locationDescriptions[code].desc}
                optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                width={200}
                labelStyle={{ width: '20%'}}
                fieldStyle={{ width: '70%'}}
                onRenderSuffix={() => (
                  <div style={{ maxWidth: '20px' }} onClick={() => console.log('edit clicked')}>
                    <i className="material-icons md-dark md-18">edit_mode</i>
                  </div>
                )}
                renderEntityAction={() => (
                  <div onClick={() => console.log('Location clicked')}>
                    <i className="material-icons md-dark md-28">add_box</i>
                  </div>
                )}
              />
            </div>
          </div>
          <div className="col-1-1" style={{ padding: '15px', backgroundColor: '#f4f4f4' }}>
            <ComponentWithLabel
              Component={TextField}
              multiline
              label="Special Transport Instructions"
              autoAdjustHeight
              disabled={disabled}
              resizable={false}
              rows={2}
              placeholder={'Special Transport Instructions'}
              labelStyle={{ width: '30%'}}
              fieldStyle={{ width: '70%'}}
            />
          </div>
        </section>
      </div>
    )
  }
}
export default PickupDetails
