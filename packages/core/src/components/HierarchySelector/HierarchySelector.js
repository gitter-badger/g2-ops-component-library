// @flow
import type { Node } from 'react'

import type { OptionsType, FlattenedOptionType } from 'types/HierarchySelector'

import React, { PureComponent } from 'react'
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import renderIf from 'render-if'
import { keys } from 'ramda'

import { AutoSelect } from 'components/AutoSelect'

import { wrapMuiContext } from 'utilities/wrapMuiContext'
import { flattenNestedOptions } from './hierarchySelector.transformer'

import './HierarchySelector.scss'

type HierarchySelectorPropType = {
  /** Each option should include level and id property used to construct unique hierarchy value */
  options: OptionsType,
  onFocus: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  /** Hierarchy object passed */
  value: Object,
  /** Render method for options */
  renderMethod: (OptionsType) => Node,
  /** OnChange method triggered when the value changes within the Component */
  onChange: (Object) => void,
  /** AlternateValue to render when the value does not exist within options */
  alternateValue: string,
}

type HierarchySelectorStateType = {
  flattenedOptions: Array<FlattenedOptionType>,
  filteredOptions: Array<FlattenedOptionType>,
  selectedValue: string,
}

const DownArrowIcon = wrapMuiContext(DownArrow)

// Helper function to check if selected option matches the current options hierarchy
const matchesOption = (selectedOption: Object) => ({ hierarchy }) =>
  keys(selectedOption).every((key) => selectedOption[key] === hierarchy[key])

export class HierarchySelector extends PureComponent<HierarchySelectorPropType, HierarchySelectorStateType> {
  constructor(props: HierarchySelectorPropType) {
    super(props)
    const { options, value, renderMethod, alternateValue} = props
    const flattenedOptions = flattenNestedOptions(options, renderMethod)
    const renderedPath = value ? this.getPathFromSelectedValue(value, flattenedOptions, alternateValue) : value
    this.state = {
      flattenedOptions,
      filteredOptions: flattenedOptions,
      selectedValue: renderedPath,
    }
  }

  componentWillReceiveProps(nextProps: HierarchySelectorPropType) {
    const { onChange } = this.props
    const { options, value, renderMethod, alternateValue } = nextProps
    if (options !== this.props.options) {
      const flattenedOptions = flattenNestedOptions(options, renderMethod)
      const renderedPath = value ? this.getPathFromSelectedValue(value, flattenedOptions, alternateValue) : value
      this.setState((prevState) => ({
        ...prevState,
        flattenedOptions,
        filteredOptions: flattenedOptions,
        selectedValue: renderedPath,
      }))
    }
  }
  
  onChange = (changedOption: FlattenedOptionType) => {
    const { onChange: onChangeMethod } = this.props
    if (typeof changedOption === 'string') {
      this.setState((prevState) => ({
        ...prevState,
        selectedValue: changedOption,
        filteredOptions: this.getFilteredOptions(changedOption, prevState.flattenedOptions),
      }))
    } else if (!changedOption.isDisabled) {
      this.setState((prevState) => ({
        ...prevState,
        selectedValue: this.renderSelectedOption(changedOption),
        filteredOptions: this.state.flattenedOptions,
      }))
    }
  // Invokes parent's onChange method with the selected option/entered desk
  onChangeMethod && onChangeMethod(changedOption)
  }

  onFocus = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.autoSelect.select()
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }

  getPathFromSelectedValue = (selectedOption: FlattenedOptionType, options: Array<FlattenedOptionType>, alternateValue: string = '') => {
    const valueAmongOptions = options.find(matchesOption(selectedOption))
    return valueAmongOptions ? this.renderSelectedOption(valueAmongOptions) : alternateValue
  }

  getFilteredOptions = (changedOption: string | FlattenedOptionType, flattenedOptions: Array<FlattenedOptionType>) => 
    flattenedOptions.filter((option: FlattenedOptionType) => {
      const { searchValues = [option.label] } = option
      return searchValues.some((value) => value.toLowerCase().startsWith(changedOption.toLowerCase()))
    })

  isControlled() {
    return this.props.hasOwnProperty('value')
  }

  autoSelect: any

  renderOption = (option: FlattenedOptionType) => {
    const numberOfSpaces = option.path.length
    const renderIfHasChildren = renderIf(option.hasChildren)
    const { filteredOptions, flattenedOptions } = this.state
    const isFilteringDone = filteredOptions.length < flattenedOptions.length
    const renderIfFilteringIsDone = renderIf(isFilteringDone)
    const paddingLeft = isFilteringDone ? '0px' : `${(numberOfSpaces - 1) * 25}px`
    const displayTitle = option.path.slice(0, numberOfSpaces - 1).join(' - ')
    return (
      <div style={{ display: 'flex', flexDirection: 'row', paddingLeft }}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {renderIfFilteringIsDone(<div className="filtered">{displayTitle}</div>)}
          <div title={`${displayTitle} - ${option.label}`}>{option.display}</div>
        </div>
      </div>
    )
  }

  renderSelectedOption = (option: FlattenedOptionType) => option.path.join(' - ')

  render() {
    const { filteredOptions, selectedValue } = this.state
    return (
      <div className="HierarchySelector">
        <AutoSelect
          ref={(n) => {
            this.autoSelect = n
          }}
          {...this.props}
          options={filteredOptions}
          serializeOption={(o) => o.hierarchy}
          displayOption={this.renderOption}
          displaySelectedOption={this.renderSelectedOption}
          onChange={this.onChange}
          value={selectedValue}
          onFocus={this.onFocus}
        />
      </div>
    )
  }
}
