import React, { Component } from 'react'
import {AutoSelect} from 'components/AutoSelect'
import { IconButton } from 'components/Button'
import { pickAll, prop, pick, values, curry, any, __, compose } from 'ramda'
import renderIf from 'render-if'

// const startsWithIgnoringCase = (val1, val2) =>
//   String(val1)
//     .toUpperCase()
//     .startsWith(String(val2).toUpperCase())

// const curriedStartsWith = curry(startsWithIgnoringCase)

type EntitySelectorPropTypes = {
  labelPosition: string,
  label: string,
  required: boolean,
  onChange: (string | Object) => void,
  onRenderSuffix: Node | Object,
  onRenderEntityAction: Node | Object,
  dataSource: Object,
  displaySelectedOption: (Object) => string,
  value: string,
  entityInformation: Node,
  menuItemBuilder: (Object) => Node,
}

const EntitySelectorDefaultProps = {
  dataSource: {
    ids: [],
    entities: {}
  },
}

export class EntitySelector extends Component<EntitySelectorPropTypes> {
  static defaultProps = EntitySelectorDefaultProps

  state = {
    typeOfSelector: this.props.typeOfSelector,
  }

  getOptions = () => {
    const { menuItemBuilder, dataSource } = this.props
    const { ids: options, entities } = dataSource
    return (
      options.map((option) => ({
        code: option,
        description: menuItemBuilder && menuItemBuilder(entities[option])
      }))
    ) 
  }

// searchThroughOptions = ({ options, displayOption, value }) => {
//   // const pickedValues = compose(values, pick(['lot_site_nm', 'phone_num']))
//   const getDisplayProps = (option) => ((option && displayOption(option) && displayOption(option).props)
//     ? displayOption(option).props : {})
//   const stringifiedValue = String(value).trim()
//   const valueToCheck = displayOption(value) || value
//   const checkIfPresent = any(curriedStartsWith(__, valueToCheck))
//   return (
//     options.find(
//       (o) =>
//         stringifiedValue &&
//         checkIfPresent(getDisplayProps(o)))
//   )
// }

  render() {
    const { 
      labelPosition,
      label,
      required, 
      onRenderSuffix, 
      onRenderEntityAction, 
      dataSource, 
      displaySelectedOption,
      optionStyle,
      value,
      entityInformation,
      ...otherProps 
    } = this.props
    const { ids: options, entities } = dataSource
    const labelText = required ? `${label}*:` : `${label}:`
    const renderIfLabelOnLeft = renderIf(labelPosition === 'left')
    const renderIfValueEntity = renderIf(entityInformation && (options.find((option) => option === value) !== undefined))
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
              value={value}
              displaySelectedOption={(o) => displaySelectedOption(o.code || o)}
              options={this.getOptions()}
              serializeOption={(o) => o.code}
              displayOption={(o) => o.description}
              optionStyleProps={{ rowHeight: 130, optionsMinHeight: 200 }}
              searchThroughOptions={() => {/* TODO: Implement filtering of options here */}}
              title={value}
              onRenderSuffix={onRenderSuffix}
            />
          </span>
          <span style={{ width: '10%' }}>
            {onRenderEntityAction()}
          </span>
        </div>
        {entityInformation}
      </div>
    )
  }
}
