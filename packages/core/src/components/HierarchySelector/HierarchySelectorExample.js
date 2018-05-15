import React from 'react'
import renderIf from 'render-if'
import { prop } from 'ramda'
import { formatDate, daysElapsedUntilToday } from '../DatePicker/dateUtils'
import { FlattenedOptionType, OptionType } from 'types/HierarchySelector'
import {HierarchySelector} from './HierarchySelector'
import towProvidersJson from './towProviders.json'

// LEHOFSTADT - DEFAULT DISPATCH - GROUP - DEVIN BURT
const initialUser = {
  company: 42517,
  group: 40348,
  driver: 15235,
}

const initialOptionId = prop('driver', initialUser) || prop('group', initialUser) || prop('company', initialUser)

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

function transformPersonnelOption(option, isVendorExpired) {
  const componentOption: OptionType = {
    id: option.vendor_personnel_id,
    level: 'driver',
    label: `${option.first_name} ${option.last_name}`,
    dispatch_flag: option.dispatch_flag,
    p_card_flag: option.p_card_flag,
    isExpired: isVendorExpired,
    isSelectable: !isVendorExpired && option.dispatch_flag === true,
  }
  return componentOption
}

function transformGroupOption(option, isVendorExpired) {
  const componentOption: OptionType = {
    id: option.dispatch_group_id,
    level: 'group',
    label: option.dispatch_group_name,
    dispatch_flag: option.dispatch_flag,
    p_card_flag: option.p_card_flag,
    isExpired: isVendorExpired,
    isSelectable: !isVendorExpired && option.dispatch_flag === true,
    options: option.personnel.map((personnelOption) => transformPersonnelOption(personnelOption, isVendorExpired)),
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
    label: option.vendor_short_name,
    dispatch_flag: option.dispatch_flag,
    expiresOn: formattedDate,
    p_card_flag: option.p_card_flag,
    isExpired: isVendorExpired,
    isSelectable: !isVendorExpired && option.dispatch_flag === true,
    options: option.dispatch_groups.map((groupOption) => transformGroupOption(groupOption, isVendorExpired)),
  }
  return componentOption
}
const towProviders = towProvidersJson.data
const componentOptions = towProviders.map(transformVendorOption)

class Example extends React.Component {
  state = {
    value: null,
  }
  onChange = (selectedOption: FlattenedOptionType) => {
    const selectedHierarchyOption = (typeof selectedOption === 'string')? selectedOption : selectedOption.hierarchy
    this.setState({ value: selectedHierarchyOption })
  }
  render () {
    return (
      <div style={{ maxWidth: '400px' }}>
        <HierarchySelector
          name="Tow Provider"
          label="Tow Provider"
          options={componentOptions}
          width={200}
          optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200, fontSize: '12px' }}
          value={initialUser}
          renderMethod={renderMethod}
          onChange={this.onChange}
          onRenderSuffix={() => <i className="material-icons">arrow_drop_down</i>}
        />
      </div>
    )
  }
}

export default Example
