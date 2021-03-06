import React from 'react'
import renderIf from 'render-if'
import { prop } from 'ramda'
import { formatDate, daysElapsedUntilToday } from '../DatePicker/dateUtils'
import { FlattenedOptionType, OptionType } from 'types/HierarchySelector'
import { HierarchySelector } from './HierarchySelector'
import towProvidersJson from './towProviders.json'

// LEHOFSTADT - DEFAULT DISPATCH - GROUP - DEVIN BURT
const initialUser = {
  company: 42517,
  group: 40348,
  driver: 15235,
}

// SUMIT TEST
const inactiveUser = {
  company: 802,
  group: null,
  driver: null,
}

export const CardIcon = () => (
  <div className="CardIcon Icon" data-tip="PCard">
    <div className="red circle" />
    <div className="orange circle" />
  </div>
)

export const renderMethod = (option) => {
  const renderIfCompany = renderIf(option.level === 'company' && option.expiresOn)
  const labelColor = option.dispatch_flag === true ? 'black' : 'grey'
  const expiryDateColor = option.isExpired ? 'red' : 'black'
  const renderIfCard = renderIf(option.p_card_flag === 'Y')
  return (
    <div className="hierarchyOption">
      <span style={{ color: `${labelColor}` }}>{option.label}</span>
      {renderIfCompany(
        <span className="separator">
          <i>
            Expires: <span style={{ color: `${expiryDateColor}` }}>{option.expiresOn} </span>
          </i>
        </span>,
      )}
      {renderIfCard(
        <span className="separator">
          <CardIcon />
        </span>,
      )}
    </div>
  )
}
const isExceeded = (givenDate: string, numberOfDays: number) => daysElapsedUntilToday(givenDate) > numberOfDays

function transformPersonnelOption(option, isVendorExpired, vendor, group) {
  const label = `${option.first_name} ${option.last_name}`
  const componentOption: OptionType = {
    id: option.vendor_personnel_id,
    level: 'driver',
    searchValues: [vendor.vendor_short_name, vendor.vendor_name, group.dispatch_group_name, label],
    label: label,
    dispatch_flag: option.dispatch_flag,
    p_card_flag: option.p_card_flag,
    isExpired: isVendorExpired,
    isSelectable: !isVendorExpired && option.dispatch_flag === true,
  }
  return componentOption
}

function transformGroupOption(option, isVendorExpired, vendor) {
  const componentOption: OptionType = {
    id: option.dispatch_group_id,
    level: 'group',
    searchValues: [vendor.vendor_short_name, vendor.vendor_name, option.dispatch_group_name],
    label: option.dispatch_group_name,
    dispatch_flag: option.dispatch_flag,
    p_card_flag: option.p_card_flag,
    isExpired: isVendorExpired,
    isSelectable: !isVendorExpired && option.dispatch_flag === true,
    options: option.personnel.map((personnelOption) => transformPersonnelOption(personnelOption, isVendorExpired, vendor, option)),
  }
  return componentOption
}

function transformVendorOption(option) {
  const formattedDate: OptionType =
    option.insurance_expiration_date && formatDate(option.insurance_expiration_date, 'YYYY-MM-DDTHH:mm:sss Z')
  const isVendorExpired = formattedDate && isExceeded(formattedDate, 30)
  const componentOption = {
    id: option.vendor_id,
    level: 'company',
    searchValues: [option.vendor_short_name, option.vendor_name],
    vendor_name: option.vendor_name,
    vendor_short_name: option.vendor_short_name,
    label: option.vendor_short_name,
    dispatch_flag: option.dispatch_flag,
    expiresOn: formattedDate,
    p_card_flag: option.p_card_flag,
    isExpired: isVendorExpired,
    isSelectable: !isVendorExpired && option.dispatch_flag === true,
    options: option.dispatch_groups.map((groupOption) => transformGroupOption(groupOption, isVendorExpired, option)),
  }
  return componentOption
}
const towProviders = towProvidersJson.data
const componentOptions = towProviders.map(transformVendorOption)

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
    }
  }
  onChange = (selectedOption: FlattenedOptionType) => {
    const selectedHierarchyOption = (typeof selectedOption === 'string')? selectedOption : selectedOption.hierarchy
    this.setState({ value: selectedHierarchyOption, errorText: '' })
  }
  render () {
    const { errorText, value } = this.state
    return (
      <div style={{ maxWidth: '400px' }}>
        <HierarchySelector
          name="Tow Provider"
          label="Tow Provider Example"
          options={componentOptions}
          alternateValue={this.props.alternateValue}
          width={200}
          optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200, fontSize: '12px' }}
          value={value}
          renderMethod={renderMethod}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Example
