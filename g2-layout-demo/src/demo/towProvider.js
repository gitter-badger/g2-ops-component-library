import React from 'react'
import { AutoSelect, TextField, DatePicker } from 'ops-portal-component-library'
import { towProviderOptions, towProviderDescriptions } from './autoSelectOptionsRefData'
import style from './style'
import moment from 'moment'
import './billingAndPickup.css'

const defaultFormat = 'DD/MM/YYYY'
class TowProvider extends React.Component {
  state = {
    'Select Tow Provider': '',
    'Scheduled Trip Date': null,
    'Promised Trip Date': null,
    'Trip Date': null,
    'Trip Distance': '',
    'Unit': '',
  }
  formatDate = (date) => {
    console.log(date, moment(date, defaultFormat).format(defaultFormat))
    return moment(date, defaultFormat).format(defaultFormat)
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <div className="section header">
          <span style={{ paddingLeft: '10px' }}>Tow Provider</span>
        </div>
        <div className="wrapper">
          <div className="footer">
            <div className="fieldGroup">
              <div className="field" style={style.fieldGroup}>
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
              <div className="field" style={style.fieldGroup}>
                <span style={style.fieldLabel}>Scheduled Trip Date*: </span>
                <span style={style.autoSelectField}>
                  <DatePicker
                    autoOk
                    placeholder={defaultFormat}
                    hintText={defaultFormat}
                    container="inline"
                    value={this.state['Scheduled Trip Date']}
                    onChange={(e, dateValue) => {
                      console.log('Scheduled Trip Date', dateValue)
                      this.setState({ 'Scheduled Trip Date': dateValue })
                    }}
                    defaultFormat={defaultFormat}
                    formatDate={this.formatDate}
                  />
                </span>
              </div>
              <div className="field" style={style.fieldGroup}>
                <span style={style.fieldLabel}>Promised Trip Date*: </span>
                <span style={style.autoSelectField}>
                  <DatePicker
                    autoOk
                    placeholder={defaultFormat}
                    hintText={defaultFormat}
                    container="inline"
                    value={this.state['Promised Trip Date']}
                    onChange={(e, dateValue) => {
                      console.log('Scheduled Trip Date', dateValue)
                      this.setState({ 'Promised Trip Date': dateValue })}
                    }
                    defaultFormat={defaultFormat}
                    formatDate={this.formatDate}
                  />
                </span>
              </div>
            </div>
            <div className="fieldGroup">
              <div className="field" style={style.fieldGroup}>
                <span style={style.fieldLabel}>Trip Date: </span>
                <span style={style.autoSelectField}>
                  <DatePicker
                    autoOk
                    placeholder={defaultFormat}
                    hintText={defaultFormat}
                    container="inline"
                    value={this.state['Trip Date']}
                    onChange={(e, dateValue) => {
                      console.log('Scheduled Trip Date', dateValue)
                      this.setState({ 'Trip Date': dateValue })}
                    }
                    defaultFormat={defaultFormat}
                    formatDate={this.formatDate}
                  />
                </span>
              </div>
              <div className="field" style={style.fieldGroup}>
                <span style={style.fieldLabel}>Trip Distance: </span>
                <span>
                  <TextField
                    autoAdjustHeight
                    disabled={false}
                    placeholder={'Trip Distance'}
                  />
                </span>
              </div>
              <div className="field" style={style.fieldGroup}>
                <span style={style.fieldLabel}>Unit: </span>
                <span>
                  <TextField
                    autoAdjustHeight
                    disabled={false}
                    value={'KM'}
                    placeholder={'Unit'}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
} 

export default TowProvider
