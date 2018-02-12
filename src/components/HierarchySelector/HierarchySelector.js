// @flow
import type { OptionsType, FlattenedOptionType } from 'types/HierarchySelector'

import React, { PureComponent } from 'react'
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import renderIf from 'render-if'

import Autoselect from '../AutoSelect'
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
    return (
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft: `${(numberOfSpaces - 1) * 30}px` }}>
        <div style={{ width: '15px', height: '15px', display: 'flex', alignItems: 'center', paddingRight: '10px' }}>
          {renderIfHaveChildren(<i className="material-icons">arrow_drop_down</i>)}
        </div>
        <div>{option.label}</div>
      </div>
    )
  }

  renderSelectedOption = (option: FlattenedOptionType) => option.path.join(' - ')

  onChange = (changedOption: FlattenedOptionType | string) => {
    const text: string = typeof changedOption === 'string' ? changedOption : changedOption.label
    this.setState((prevState) => ({
      ...prevState,
      filteredOptions: prevState.flattenedOptions.filter((option: FlattenedOptionType) =>
        option.label.toLowerCase().startsWith(text.toLowerCase()),
      ),
    }))
  }

  render() {
    const { filteredOptions } = this.state
    return (
      <div className="HierarchySelector">
        <AutoSelect
          {...this.props}
          options={filteredOptions}
          displayOption={this.renderOption}
          displaySelectedOption={this.renderSelectedOption}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default HierarchySelector
