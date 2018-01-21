import React from 'react'
import { AutoSelect, TextField } from 'ops-portal-component-library'
import ComponentWithLabel from './componentLabelWrapper'
import { yesNoOptions, yesNoDescriptions } from './autoSelectOptionsRefData'
import style from './style'
import './billingAndPickup.css'

class AdvanceChargePayment extends React.Component {
  state = {
    'Are There Advance Charges?': '',
    'Responsible Party': '',
    'Advance Charges Paid': ''
  }
  render() { 
    const disabled = !this.props.isEditing
    return (
      <div style={{ display: 'table', width: '100%' }}>
        <section className="section header">
          <span style={{ paddingLeft: '10px' }}>Advance Charge Payment</span>
        </section>
        <section className="col-1-1" style={{ padding: '15px', backgroundColor: '#f4f4f4' }}>
          <div className="col-1-3">
            <ComponentWithLabel
              Component={AutoSelect}
              name={'Are There Advance Charges?'}
              placeholder={'Are There Advance Charges?'}
              options={yesNoOptions}
              label="Are There Advance Charges?"
              required
              disabled={disabled}
              displayOption={(code) => yesNoDescriptions[code].desc}
              value={this.state['Are There Advance Charges?']}
              onChange={(value) => this.setState({ 'Are There Advance Charges?': value })}
              optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
              width={200}
              fieldStyle={style.fieldStyle}
              labelStyle={style.labelStyle}
            />
          </div>
          <div className="col-1-3">
            <ComponentWithLabel
              Component={TextField}
              required
              label="Responsible Party"
              autoAdjustHeight
              disabled={disabled}
              resizable={false}
              rows={2}
              placeholder={'Responsible Party'}
              fieldStyle={style.fieldStyle}
              labelStyle={style.labelStyle}
            />
          </div>
          <div className="col-1-3" style={{ paddingRight: '0' }}>
            <ComponentWithLabel
              Component={AutoSelect}
              name={'Advance Charges Paid'}
              label={'Advance Charges Paid'}
              required
              placeholder={'Advance Charges Paid'}
              options={yesNoOptions}
              disabled={disabled}
              displayOption={(code) => yesNoDescriptions[code].desc}
              value={this.state['Advance Charges Paid']}
              onChange={(value) => this.setState({ 'Advance Charges Paid': value })}
              optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
              width={200}
              fieldStyle={style.fieldStyle}
              labelStyle={style.labelStyle}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default AdvanceChargePayment
