// @flow
import type { OptionsType, FlattenedOptionType } from 'types/HierarchySelector'

import React, { PureComponent } from 'react'
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import renderIf from 'render-if'

import AutoSelect from 'components/AutoSelect'

import { wrapMuiContext } from '../../wrapMuiContext'
import { flattenNestedOptions } from './hierarchySelector.transformer'

type HierarchySelectorPropType = {
  options: OptionsType,
}

type HierarchySelectorStateType = {
  flattenedOptions: Array<FlattenedOptionType>,
  filteredOptions: Array<FlattenedOptionType>,
  selectedValue?: FlattenedOptionType,
}

const DownArrowIcon = wrapMuiContext(DownArrow)

class HierarchySelector extends PureComponent<HierarchySelectorPropType, HierarchySelectorStateType> {
  constructor(props: HierarchySelectorPropType) {
    super(props)
    const { options } = props
    const flattenedOptions = flattenNestedOptions(options)
    this.state = {
      flattenedOptions,
      filteredOptions: flattenedOptions,
    }
  }

  componentWillReceiveProps(nextProps: HierarchySelectorPropType) {
    if (nextProps.options !== this.props.options) {
      const flattenedOptions = flattenNestedOptions(nextProps.options)
      this.setState((prevState) => ({
        ...prevState,
        flattenedOptions,
        filteredOptions: flattenedOptions,
      }))
    }
  }

  renderOption = (option: FlattenedOptionType) => {
    const numberOfSpaces = option.path.length
    const renderIfHaveChildren = renderIf(option.haveChildren)
    const { filteredOptions, flattenedOptions } = this.state
    const isFilteringDone = filteredOptions.length < flattenedOptions.length
    const renderIfFilteringIsDone = renderIf(isFilteringDone)
    const paddingLeft = isFilteringDone ? '0px' : `${(numberOfSpaces - 1) * 30}px`
    const displayTitle = option.path.slice(0, numberOfSpaces - 1).join(' - ')
    return (
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft }}>
        <div style={{ width: '15px', height: '15px', display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
          {renderIfHaveChildren(<i className="material-icons">arrow_drop_down</i>)}
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {renderIfFilteringIsDone(<div style={{ color: 'gray', paddingRight: '10px' }}>{displayTitle}</div>)}
          <div style={{ color: 'black' }} title={`${displayTitle} - ${option.label}`}>
            {option.label}
          </div>
        </div>
      </div>
    )
  }

  renderSelectedOption = (option: FlattenedOptionType) => option.path.join(' - ')

  onChange = (changedOption: FlattenedOptionType | string) => {
    if (typeof changedOption === 'string') {
      this.setState((prevState) => ({
        ...prevState,
        filteredOptions: prevState.flattenedOptions.filter((option: FlattenedOptionType) =>
          option.label.toLowerCase().startsWith(changedOption.toLowerCase()),
        ),
      }))
    } else {
      this.setState((prevState) => ({
        ...prevState,
        selectedValue: changedOption,
      }))
    }
  }

  render() {
    const { filteredOptions, selectedValue } = this.state
    return (
      <div className="HierarchySelector">
        <AutoSelect
          {...this.props}
          options={filteredOptions}
          serializeOption={(o) => o.label}
          displayOption={this.renderOption}
          displaySelectedOption={this.renderSelectedOption}
          onChange={this.onChange}
          value={selectedValue}
        />
      </div>
    )
  }
}

export default HierarchySelector
