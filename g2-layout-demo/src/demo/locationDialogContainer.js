import React from 'react'
import { TextField } from '@copart/core-components'
import ComponentWithLabel from './componentLabelWrapper'

const isBlank = value => value === '' || value === null || value === undefined

const errorMessageValdiation = (value, required, showErrors) => {
  return required && showErrors && isBlank(value) ? 'This field is required' : ''
}

class LocationInfoForm extends React.Component {
  constructor(props) {
    super(props)
    const { locationObject = {}, showErrors } = this.props
    const {
      addr_line1: address1,
      addr_line2: address2,
      alt_phone_num: altPhone,
      city,
      email,
      lot_site_nm: name,
      oper_cntry_cd: country,
      phone_num: phone,
      postal_cd: postalCode,
      state_cd: state,
      vat_id: vatId,
    } = locationObject
    this.state = {
      'Address 1': address1,
      'Address 2': address2,
      'Alt Phone': altPhone,
      City: city,
      Email: email,
      Name: name,
      Country: country,
      Phone: phone,
      'Postal Code': postalCode,
      'State/Province': state,
      'Vat Id': vatId,
      showErrors,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ showErrors: nextProps.showErrors })
  }
  renderTextField = (name, required = false) => (
    <ComponentWithLabel
      Component={TextField}
      label={name}
      disabled={false}
      required={required}
      resizable={false}
      value={this.state[name]}
      onChanged={value => this.setState({ [name]: value })}
      placeholder={name}
      errorMessage={errorMessageValdiation(this.state[name], required, this.state.showErrors)}
      labelStyle={{ width: '30%' }}
      fieldStyle={{ width: '70%' }}
    />
  )
  render() {
    return (
      <div style={{ display: 'table', paddingTop: '10px' }}>
        <div className="col-1-1" style={{ padding: '0px' }}>
          <div className="col-1-2">{this.renderTextField('Name', true)}</div>
        </div>
        <div className="col-1-1" style={{ padding: '0px' }}>
          <div className="col-1-2">{this.renderTextField('Address 1', true)}</div>
          <div className="col-1-2">{this.renderTextField('Address 2', false)}</div>
        </div>
        <div className="col-1-1" style={{ padding: '0px' }}>
          <div className="col-1-2">{this.renderTextField('Country', true)}</div>
          <div className="col-1-2">{this.renderTextField('State/Province', true)}</div>
        </div>
        <div className="col-1-1" style={{ padding: '0px' }}>
          <div className="col-1-2">{this.renderTextField('City', false)}</div>
          <div className="col-1-2">{this.renderTextField('Postal Code', true)}</div>
        </div>
        <div className="col-1-1" style={{ padding: '0px' }}>
          <div className="col-1-2">{this.renderTextField('Phone', true)}</div>
          <div className="col-1-2">{this.renderTextField('Alt Phone', false)}</div>
        </div>
        <div className="col-1-1" style={{ padding: '0px' }}>
          <div className="col-1-2">{this.renderTextField('Email', true)}</div>
          <div className="col-1-2">{this.renderTextField('Vat Id', false)}</div>
        </div>
      </div>
    )
  }
}

export default LocationInfoForm
