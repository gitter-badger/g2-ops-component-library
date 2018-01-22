import React from 'react'
import { AutoSelect, TextField, DatePicker } from 'ops-portal-component-library'
import ComponentWithLabel from './componentLabelWrapper'
import { towProviderOptions, towProviderDescriptions } from './autoSelectOptionsRefData'
import style from './style'
import moment from 'moment'
import './billingAndPickup.css'

const defaultFormat = 'DD/MM/YYYY'
class TowProvider extends React.Component {
  state = {
    'Select Tow Provider': 172,
    'Scheduled Trip Date': new Date(),
    'Promised Trip Date': new Date(),
    'Trip Date': new Date(),
    'Trip Distance': '',
    'Unit': '',
  }
  formatDate = (date) => moment(date, defaultFormat).format(defaultFormat)
  render() {
    const disabled = !this.props.isEditing
    return (
      <div style={{ display: 'table', width: '100%' }}>
        <div className="header">
          <span style={{ paddingLeft: '10px' }}>Tow Provider</span>
        </div>
        <div style={{ display: 'table', padding: '0px', backgroundColor: '#f4f4f4', marginTop: '5px' }}>
          <section className="col-1-1" style={{ padding: '0px' }}>
            <div className="col-1-3" style={{ padding: '0 0 0 5px' }}>
              <ComponentWithLabel
                Component={AutoSelect}
                name={'Select Tow Provider'}
                label={'Select Tow Provider'}
                required
                options={towProviderOptions}
                placeholder={'Select Tow Provider'}
                value={this.state['Select Tow Provider']}
                disabled={disabled}
                onChange={(value) => this.setState({ 'Select Tow Provider': value })}
                displayOption={(code) => towProviderDescriptions[code].desc}
                optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
                fieldStyle={style.fieldStyle}
                labelStyle={style.labelStyle}
              />
            </div>
            <div className="col-1-3" style={{ padding: '0px' }}>
              <ComponentWithLabel
                Component={DatePicker}
                autoOk
                label="Scheduled Trip Date"
                required
                placeholder={defaultFormat}
                hintText={defaultFormat}
                container="inline"
                disabled={disabled}
                value={this.state['Scheduled Trip Date']}
                onChange={(e, dateValue) => this.setState({ 'Scheduled Trip Date': dateValue })}
                defaultFormat={defaultFormat}
                formatDate={this.formatDate}
                fieldStyle={style.fieldStyle}
                labelStyle={style.labelStyle}
              />
            </div>
            <div className="col-1-3" style={{ padding: '0 5px 0 0' }}>
              <ComponentWithLabel
                Component={DatePicker}
                autoOk
                label="Promised Trip Date"
                required
                placeholder={defaultFormat}
                hintText={defaultFormat}
                container="inline"
                disabled={disabled}
                value={this.state['Promised Trip Date']}
                onChange={(e, dateValue) => this.setState({ 'Promised Trip Date': dateValue })}
                defaultFormat={defaultFormat}
                formatDate={this.formatDate}
                fieldStyle={style.fieldStyle}
                labelStyle={style.labelStyle}
              />
            </div>
          </section>
          <section className="col-1-1" style={{ padding: '0px' }}>
            <div className="col-1-3" style={{ padding: '0 0 0 5px' }}>
              <ComponentWithLabel
                Component={DatePicker}
                autoOk
                label="Trip Date"
                placeholder={defaultFormat}
                hintText={defaultFormat}
                container="inline"
                disabled={disabled}
                value={this.state['Trip Date']}
                onChange={(e, dateValue) => this.setState({ 'Trip Date': dateValue })}
                defaultFormat={defaultFormat}
                formatDate={this.formatDate}
                fieldStyle={style.fieldStyle}
                labelStyle={style.labelStyle}
              />
            </div>
            <div className="col-1-3" style={{ padding: '0px' }}>
              <ComponentWithLabel
                Component={TextField}
                label="Trip Distance"
                autoAdjustHeight
                disabled={disabled}
                placeholder={'Trip Distance'}
                fieldStyle={style.fieldStyle}
                labelStyle={style.labelStyle}
              />
            </div>
            <div className="col-1-3" style={{ padding: '0 5px 0 0' }}>
              <ComponentWithLabel
                Component={TextField}
                label="Unit"
                autoAdjustHeight
                disabled={disabled}
                value={'KM'}
                placeholder={'Unit'}
                fieldStyle={style.fieldStyle}
                labelStyle={style.labelStyle}
              />
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default TowProvider
