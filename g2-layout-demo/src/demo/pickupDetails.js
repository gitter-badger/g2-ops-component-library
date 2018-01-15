import React from 'react'
import { AutoSelect, TextField } from 'ops-portal-component-library'
import './flexBoxExample.css'

const basicFields = ['Pickup Required', 'Residence', 'Tow Type', 'Towable', 'Keys']
const options = ['Y', 'N']
const descriptions = {
  'Y': { code: 'Y', desc: 'Yes'},
  'N': { code: 'N', desc: 'No'},
}

const optionsLocation = [0, 1]
const descriptionsLocation = {
  0: { code: 0, desc: '14185 Dallas Parkway, Dallas TX-75254'},
  1: { code: 1, desc: '521 South Good Latimer, Apt 1728, Dallas TX-75254'},
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
    return (
      <div>
        <div className="section header">
          <span style={{ paddingLeft: '10px' }}>Pickup Details</span>
        </div>
        <div className="wrapper">
          <div className="aside aside-1">
            {basicFields.map(fieldKey => (
              <div key={`div-${fieldKey}`} style={{ maxWidth: 'auto', display: 'flex', fontSize: '12px', fontWeight: 400, marginTop: '5px' }}>
                <span style={{ color: '#1d5ab9', textAlign: 'left', width: '40%', marginTop: '10px', fontSize: '12px' }}>{fieldKey}*: </span>
                <span style={{ width: '100%' }}>
                  <AutoSelect
                    key={`autoselect-${fieldKey}`}
                    name={fieldKey}
                    placeholder={fieldKey}
                    options={options}
                    displayOption={(code) => descriptions[code].desc}
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
            <div style={{ maxWidth: 'auto', display: 'flex', fontSize: '12px', fontWeight: 400, marginTop: '5px' }}>
              <span style={{ color: '#1d5ab9', textAlign: 'left', width: '25%', marginTop: '10px', fontSize: '12px' }}>Location*: </span>
              <span style={{ width: '100%' }}>
                <AutoSelect
                  name="Location"
                  options={optionsLocation}
                  placeholder={'Location'}
                  value={this.state.Location}
                  onChange={(value) => this.setState({ 'Location': value })}
                  displayOption={(code) => descriptionsLocation[code].desc}
                  optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                  width={200}
                />
              </span>
            </div>
          </div>
          <div className="footer">
            <div style={{ maxWidth: 'auto', display: 'flex', fontSize: '12px', fontWeight: 400, marginTop: '5px' }}>
                <span style={{ color: '#1d5ab9', textAlign: 'left', width: '25%', marginTop: '10px', fontSize: '12px' }}>
                  Special Transport Instructions:
                </span>
                <span style={{ width: '100%' }}>
                  <TextField
                    multiline
                    autoAdjustHeight
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
