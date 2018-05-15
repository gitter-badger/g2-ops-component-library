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
  options: OptionsType,
  onFocus: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  value: Object,
  renderMethod: Function,
  onChange: Function,
}

type HierarchySelectorStateType = {
  flattenedOptions: Array<FlattenedOptionType>,
  filteredOptions: Array<FlattenedOptionType>,
  selectedValue: string,
}

const DownArrowIcon = wrapMuiContext(DownArrow)

export class HierarchySelector extends PureComponent<HierarchySelectorPropType, HierarchySelectorStateType> {
  constructor(props: HierarchySelectorPropType) {
    super(props)
    const { options, value, renderMethod } = props
    const flattenedOptions = flattenNestedOptions(options, renderMethod)
    const renderedPath = this.getPathFromSelectedValue(value, flattenedOptions)
    this.state = {
      flattenedOptions,
      filteredOptions: flattenedOptions,
      selectedValue: renderedPath,
    }
  }

  componentWillReceiveProps(nextProps: HierarchySelectorPropType) {
    const { onChange } = this.props
    const { options, value, renderMethod } = nextProps
    if (options !== this.props.options) {
      const flattenedOptions = flattenNestedOptions(options, renderMethod)
      const renderedPath = this.getPathFromSelectedValue(value, flattenedOptions)
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
        filteredOptions: prevState.flattenedOptions.filter((option: FlattenedOptionType) =>
          option.label.toLowerCase().startsWith(changedOption.toLowerCase()),
        ),
      }))
    } else if (!changedOption.isDisabled) {
      const filteredOptions = this.state.flattenedOptions.filter((option: FlattenedOptionType) =>
        option.label.toLowerCase().startsWith(changedOption.label.toLowerCase()),
      )
      this.setState((prevState) => ({
        ...prevState,
        selectedValue: this.renderSelectedOption(changedOption),
        filteredOptions: filteredOptions,
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

  getPathFromSelectedValue = (selectedOption: Object, options: Array<FlattenedOptionType>) => {
    const matchesOption = ({ hierarchy }) => (option) => 
      keys(selectedOption).every((key) => hierarchy[key] === option[key])
    const valueAmongOptions = options.find((o) => matchesOption(o)(selectedOption))
    return valueAmongOptions ? this.renderSelectedOption(valueAmongOptions) : ''
  }

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
          serializeOption={(o) => o.id}
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
