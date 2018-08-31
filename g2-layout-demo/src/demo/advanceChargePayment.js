import React from 'react'
import { AutoSelect } from '@copart/core-components'
import ComponentWithLabel from './componentLabelWrapper'
import {
  yesNoOptions,
  yesNoDescriptions,
  responsiblePartyOptions,
  responsiblePartyDescriptions,
} from './autoSelectOptionsRefData'
import style from './style'
import './billingAndPickup.css'

class AdvanceChargePayment extends React.Component {
  state = {
    'Advance Charges': 'Yes',
    'Responsible Party': 'Seller',
    'Advance Charges Paid': 'No',
  }
  render() {
    const disabled = !this.props.isEditing
    return (
      <div style={{ display: 'table', width: '100%' }}>
        <section className="header">
          <span style={{ paddingLeft: '10px' }}>Advance Charge Payment</span>
        </section>
        <section className="col-1-1" style={{ padding: '0px', backgroundColor: '#f4f4f4', marginTop: '5px' }}>
          <div className="col-1-3" style={{ padding: '0 0 0 5px' }}>
            <ComponentWithLabel
              Component={AutoSelect}
              name={'Advance Charges?'}
              placeholder={'Advance Charges?'}
              options={yesNoOptions}
              label="Advance Charges?"
              required
              disabled={disabled}
              displayOption={code => yesNoDescriptions[code].desc}
              value={this.state['Advance Charges']}
              onChange={value => this.setState({ 'Advance Charges': value })}
              optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
              width={200}
              fieldStyle={{ ...style.fieldStyle, marginTop: '5px' }}
              labelStyle={style.labelStyle}
            />
          </div>
          <div className="col-1-3" style={{ padding: '0px' }}>
            <ComponentWithLabel
              Component={AutoSelect}
              name={'Responsible Party'}
              placeholder={'Responsible Party'}
              options={responsiblePartyOptions}
              label="Responsible Party"
              required
              disabled={disabled}
              displayOption={code => responsiblePartyDescriptions[code].desc}
              value={this.state['Responsible Party']}
              onChange={value => this.setState({ 'Responsible Party': value })}
              optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
              width={200}
              fieldStyle={{ ...style.fieldStyle, marginTop: '5px' }}
              labelStyle={style.labelStyle}
            />
          </div>
          <div className="col-1-3" style={{ padding: '0 5px 0 0' }}>
            <ComponentWithLabel
              Component={AutoSelect}
              name={'Advance Charges Paid'}
              label={'Advance Charges Paid'}
              required
              placeholder={'Advance Charges Paid'}
              options={yesNoOptions}
              disabled={disabled}
              displayOption={code => yesNoDescriptions[code].desc}
              value={this.state['Advance Charges Paid']}
              onChange={value => this.setState({ 'Advance Charges Paid': value })}
              optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
              width={200}
              fieldStyle={{ ...style.fieldStyle, marginTop: '5px' }}
              labelStyle={style.labelStyle}
            />
          </div>
        </section>
      </div>
    )
  }
}

export default AdvanceChargePayment
