import React from 'react'
import renderIf from 'render-if'

import { formatDate, daysElapsedUntilToday } from '../DatePicker/dateUtils'
import HierarchySelector from './HierarchySelector'
import './HierarchySelector.scss'
import { FlattenedOptionType, HierarchyType } from '../../../types/HierarchySelector'
import towProvidersJson from './towProviders.json'

// G/RTOW - G/RTOWDG - ALLEN MARQUEZ
const initialUser = {
  company: 226,
  group: 203,
  driver: 1000,
}

const handleSelectSubhauler = (selectedOption: FlattenedOptionType) => {
  const selectedSubhauler = { user: selectedOption.hierarchy }
  console.log('handleSelectSubhauler called for newly selected value: ', selectedSubhauler)
}
export const CardIcon = () => (
  <div className="CardIcon Icon" data-tip="PCard">
    <div className="red circle" />
    <div className="orange circle" />
  </div>
)

export const renderMethod = (option, isExpired) => {
  const renderIfCompany = renderIf(option.level === 'company' && option.expiresOn)
  const labelColor = option.isDisabled ? 'grey' : 'black'
  const expiryDateColor = isExpired ? 'red' : 'black'
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

function transformPersonnelOption(option) {
  const componentOption = {
    id: option.vendor_personnel_id,
    level: 'driver',
    label: `${option.first_name} ${option.last_name}`,
    isDisabled: option.dispatch_flag === false || false,
    p_card_flag: option.p_card_flag,
  }
  return componentOption
}

function transformGroupOption(option) {
  const componentOption = {
    id: option.dispatch_group_id,
    level: 'group',
    label: option.dispatch_group_name,
    isDisabled: option.dispatch_flag === false || false,
    p_card_flag: option.p_card_flag,
    options: option.personnel.map(transformPersonnelOption),
  }
  return componentOption
}

function transformVendorOption(option) {
  const formattedDate =
    option.insurance_expiration_date && formatDate(option.insurance_expiration_date, 'YYYY-MM-DDTHH:mm:sss Z')
  const isVendorExpired = formattedDate && isExceeded(formattedDate, 30)
  const componentOption = {
    id: option.vendor_id,
    level: 'company',
    label: option.vendor_short_name,
    expiresOn: formattedDate,
    isExpired: !!isVendorExpired,
    isDisabled: option.dispatch_flag === false || false,
    p_card_flag: option.p_card_flag,
    options: option.dispatch_groups.map(transformGroupOption),
  }
  return componentOption
}
const towProviders = towProvidersJson.data
const componentOptions = towProviders.map(transformVendorOption)

console.log('component: ', componentOptions)
const Example = () => (
  <div style={{ maxWidth: '400px' }}>
    <HierarchySelector
      name="HierarchySelector Field"
      options={componentOptions}
      width={200}
      optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200, fontSize: '12px' }}
      value={initialUser}
      renderMethod={renderMethod}
      onChange={handleSelectSubhauler}
    />
  </div>
)

export default Example
