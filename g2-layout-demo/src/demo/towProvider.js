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
  formatDate = (date) => moment(date, defaultFormat).format(defaultFormat)
  render() {
    return (
      <div style={{ overflow: 'auto' }}>
        <div className="section header">
          <span style={{ paddingLeft: '10px' }}>Tow Provider</span>
        </div>
        <section className="col-1-1">
          <div className="col-1-3">
            <span>Select Tow Provider*: </span>
            <span>
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
          <div className="col-1-3">
            <span>Scheduled Trip Date*: </span>
            <span>
              <DatePicker
                autoOk
                placeholder={defaultFormat}
                hintText={defaultFormat}
                container="inline"
                value={this.state['Scheduled Trip Date']}
                onChange={(e, dateValue) => this.setState({ 'Scheduled Trip Date': dateValue })}
                defaultFormat={defaultFormat}
                formatDate={this.formatDate}
              />
            </span>
          </div>
          <div className="col-1-3">
            <span>Promised Trip Date*: </span>
            <span>
              <DatePicker
                autoOk
                placeholder={defaultFormat}
                hintText={defaultFormat}
                container="inline"
                value={this.state['Promised Trip Date']}
                onChange={(e, dateValue) => this.setState({ 'Promised Trip Date': dateValue })}
                defaultFormat={defaultFormat}
                formatDate={this.formatDate}
              />
            </span>
          </div>
        </section>
        <section className="col-1-1">
          <div className="col-1-3">
            <span>Trip Date: </span>
            <span>
              <DatePicker
                autoOk
                placeholder={defaultFormat}
                hintText={defaultFormat}
                container="inline"
                value={this.state['Trip Date']}
                onChange={(e, dateValue) => this.setState({ 'Trip Date': dateValue })}
                defaultFormat={defaultFormat}
                formatDate={this.formatDate}
              />
            </span>
          </div>
          <div className="col-1-3">
            <span>Trip Distance: </span>
            <span>
              <TextField
                autoAdjustHeight
                disabled={false}
                placeholder={'Trip Distance'}
              />
            </span>
          </div>
          <div className="col-1-3">
            <span>Unit: </span>
            <span>
              <TextField
                autoAdjustHeight
                disabled={false}
                value={'KM'}
                placeholder={'Unit'}
              />
            </span>
          </div>
        </section>
      </div>
    )
  }
}

export default TowProvider
