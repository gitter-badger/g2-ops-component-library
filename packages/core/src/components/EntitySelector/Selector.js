import React from 'react'
import {AutoSelect} from 'components/AutoSelect'
import { IconButton } from 'components/Button'
import { pickAll, prop, pick, values, curry, any, __, compose } from 'ramda'
import renderIf from 'render-if'
import config from './entitySelectorConfig'
import EntityInformation from './EntityInformation'
import PickupPrimaryText from './PickupPrimaryText'

const getPropsForEntity = (typeOfSelector, props) => {
  const { entityDataSourceKeys, entityDisplayFunction, primaryTextKeys, rowHeight } = config(typeOfSelector)
  return {
    entityDataSource: prop(entityDataSourceKeys)(props),
    entityDisplayFunction,
    primaryTextKeys,
    rowHeight
  }
}

const getPrimaryTextComponentBasedOnEntity = (typeOfSelector, dataForDescription) => {
  switch (typeOfSelector) {
    case 'pickupLocation':
      return <PickupPrimaryText {...dataForDescription} />
    default:
      break
  }
}

const buildItem = (id, entity, typeOfSelector, primaryTextKeys) => {
  const dataForDescription = entity && pickAll(primaryTextKeys, entity)
  return {
    description: getPrimaryTextComponentBasedOnEntity(typeOfSelector, dataForDescription),
    code: id
  }
}
const startsWithIgnoringCase = (val1, val2) =>
  String(val1)
    .toUpperCase()
    .startsWith(String(val2).toUpperCase())
const curriedStartsWith = curry(startsWithIgnoringCase)

const searchThroughOptions = ({ options, displayOption, value }) => {
  const pickedValues = compose(values, pick(['lot_site_nm', 'phone_num']))
  const getDisplayProps = (option) => ((option && displayOption(option) && displayOption(option).props)
    ? displayOption(option).props : {})
  const stringifiedValue = String(value).trim()
  const valueToCheck = displayOption(value) || value
  const checkIfPresent = any(curriedStartsWith(__, valueToCheck))
  return (
    options.find(
      (o) =>
        stringifiedValue &&
        checkIfPresent(pickedValues(getDisplayProps(o))))
  )
}
const Selector = (props) => {
  const { labelPosition, label, required, onRenderSuffix, onRenderEntityAction, options, typeOfSelector, ...otherProps } = props
  const { entityDataSource, entityDisplayFunction, primaryTextKeys, rowHeight = 72 } = getPropsForEntity(typeOfSelector, props)
  const renderIfLabelOnLeft = renderIf(labelPosition === 'left')
  const labelText = required ? `${label}*:` : `${label}:`
  const dataSource = options.map((id) => buildItem(id, entityDataSource.entities[id], typeOfSelector, primaryTextKeys))
  const valueEntity = entityDataSource.entities[props.value]
  return (
    <div>
      <div style={{ display: 'flex' }}>
        {renderIfLabelOnLeft(
          <span style={{ width: '20%', marginTop: '10px', color: '#1d5ab9', fontSize: '13px' }}>
            {labelText}
          </span>
        )}
        <span style={{ width: '70%' }}>
          <AutoSelect
            {...otherProps}
            displaySelectedOption={(o) => o && entityDisplayFunction(entityDataSource.entities[o.code])}
            options={dataSource}
            serializeOption={(o) => o.code}
            displayOption={(o) => o.description}
            optionStyleProps={{
              rowHeight: rowHeight,
              optionsMinHeight: 200
            }}
            searchThroughOptions={searchThroughOptions}
            title={props.value}
            onRenderSuffix={onRenderSuffix}
          />
        </span>
        <span style={{ width: '10%' }}>
          {onRenderEntityAction()}
        </span>
      </div>
      <EntityInformation valueEntity={valueEntity} />
    </div>
  )
}

export default Selector