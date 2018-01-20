import React from 'react'
import { AutoSelect, TextField } from 'ops-portal-component-library'
import ComponentWithLabel from './componentLabelWrapper'
import Location from './location'
import { yesNoOptions, yesNoDescriptions, towTypeOptions, towTypeDescriptions } from './autoSelectOptionsRefData'
import './billingAndPickup.css'

const basicFields = ['Pickup Required', 'Residence', 'Tow Type', 'Towable', 'Keys']

const getOptionsForField = (fieldKey) => {
  switch(fieldKey) {
    case 'Tow Type':
      return towTypeOptions
    default:
      return yesNoOptions
  }
}

const getDescriptionForField = (fieldKey) => {
  switch(fieldKey) {
    case 'Tow Type':
      return towTypeDescriptions
    default:
      return yesNoDescriptions
  }
}

class PickupDetails extends React.Component {
  state = {
    'Pickup Required': 'Yes',
    'Residence': 'No',
    'Tow Type': 'Standard',
    'Towable': 'Yes',
    'Keys': 'Yes',
    'Special Transport Instructions': 'Special Transport Instructions added here.'
  }
  render() {
    const disabled = true
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
                  options={getOptionsForField(fieldKey)}
                  disabled={disabled}
                  displayOption={(code) => getDescriptionForField(fieldKey)[code].desc}
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
              <Location disabled={disabled} />
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
              onChanged={(value) => this.setState({ 'Special Transport Instructions': value })}
              value={this.state['Special Transport Instructions']}
              placeholder={'Special Transport Instructions'}
              labelStyle={{ width: '25%'}}
              fieldStyle={{ width: '75%'}}
            />
          </div>
        </section>
      </div>
    )
  }
}
export default PickupDetails
