// @flow
import type { Node } from 'react'

import type { OptionsType, FlattenedOptionType } from 'types/HierarchySelector'

import React, { PureComponent } from 'react'
import DownArrow from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import renderIf from 'render-if'

import {AutoSelect} from 'components/AutoSelect'

import { wrapMuiContext } from 'utilities/wrapMuiContext'
import { flattenNestedOptions } from './hierarchySelector.transformer'

import './HierarchySelector.scss'

type HierarchySelectorPropType = {
  options: OptionsType,
  onFocus: (SyntheticKeyboardEvent<HTMLInputElement>) => void,
  value: number,
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
  autoSelect: Node // eslint-disable-line
  constructor(props: HierarchySelectorPropType) {
    super(props)
    const { options, value: optionId, renderMethod } = props
    const flattenedOptions = flattenNestedOptions(options, renderMethod)
    const renderedPath = this.convertIdToPath(optionId, flattenedOptions)
    this.state = {
      flattenedOptions,
      filteredOptions: flattenedOptions,
      selectedValue: renderedPath,
    }
  }

  componentWillReceiveProps(nextProps: HierarchySelectorPropType) {
    const { onChange } = this.props
    const { options, value: optionId, renderMethod } = nextProps
    if (options !== this.props.options) {
      const flattenedOptions = flattenNestedOptions(options, renderMethod)
      const renderedPath = this.convertIdToPath(optionId, flattenedOptions)
      this.setState((prevState) => ({
        ...prevState,
        flattenedOptions,
        filteredOptions: flattenedOptions,
        selectedValue: renderedPath,
      }))
    }
  }

  isControlled() {
    return this.props.hasOwnProperty('value')
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
      // invokes parent's onChange method
      onChangeMethod && onChangeMethod(changedOption)
    }
  }

  onFocus = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.autoSelect.select()
    if (this.props.onFocus) {
      this.props.onFocus(e)
    }
  }

  convertIdToPath = (lookupId: number, options: Array<FlattenedOptionType>) => {
    const valueAmongOptions = options.find((o) => o.id === lookupId)
    const displayMethod = this.renderSelectedOption || this.renderOption
    const result = valueAmongOptions ? displayMethod(valueAmongOptions) : ''
    return result
  }

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
        <div style={{ marginTop: '-5px', display: 'flex', alignItems: 'center' }}>
          {renderIfHasChildren(<i className="material-icons">arrow_drop_down</i>)}
        </div>
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
