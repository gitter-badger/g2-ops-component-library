import React from 'react'
import { AutoSelect, TextField, IconButton, EntitySelector, DialogBox } from 'ops-portal-component-library'
import ComponentWithLabel from './componentLabelWrapper'
import pickupLocations from './refData'
import { yesNoOptions, yesNoDescriptions, towTypeOptions, towTypeDescriptions } from './autoSelectOptionsRefData'
// import style from './style'
import './billingAndPickup.css'

const basicFields = ['Pickup Required', 'Residence', 'Tow Type', 'Towable', 'Keys']

const locationOptions = pickupLocations.ids;

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
    'Pickup Required': '',
    'Residence': '',
    'Tow Type': '',
    'Towable': '',
    'Keys': '',
    'Location': '',
  }
  render() {
    console.log(DialogBox)
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
              <EntitySelector
                name="Location"
                options={locationOptions}
                value={this.state['Location']}
                label="Location"
                labelPosition="left"
                required
                onChange={(value) => this.setState({ 'Location': value })}
                typeOfSelector="pickupLocation"
                pickupLocations={pickupLocations}
                onRenderEntityAction={() => (
                  <IconButton 
                    tooltip={'Add New Location'}
                    onTouchTap={() => console.log('Add New Location clicked')}
                  >
                    <i className="material-icons md-dark md-28">add_box</i>
                  </IconButton>
                )}
                onRenderSuffix={() => (
                  <IconButton
                    style={{ margin: '-15px' }}
                    onTouchTap={() => console.log('edit clicked')}
                    tooltip={'Edit Location'}
                  >
                    <i className="material-icons md-dark md-18">edit_mode</i>
                  </IconButton>
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
