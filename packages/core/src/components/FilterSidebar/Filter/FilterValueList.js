// @flow

import type { FilterValueType } from 'types/Filter'
import React, { Component } from 'react'
import renderIf from 'render-if'
import { TextField } from 'components/TextField'
import FilterValue from './FilterValue'
import './FilterValueList.scss'

type FilterValueListPropType = {
  filterOptions: Array<FilterValueType>,
  selectedFilterLabels: Array<string>,
  selectedFilterValues?: Array<string>,
  onFilterValueChange: (Array<string>, string) => void,
  name: string,
  type: string,
  onRangeFilterChange: Function,
}

type FilterValueListStateType = {
  selectedFilterLabels: Array<string>,
}

export class FilterValueList extends Component<FilterValueListPropType, FilterValueListStateType> {
  state = {
    selectedFilterLabels: [],
    filterOptions: {},
  }

  componentWillMount() {
    const { selectedFilterLabels, filterOptions } = this.props
    this.setState(() => ({ selectedFilterLabels: selectedFilterLabels }))
    this.setState(() => ({ filterOptions: filterOptions }))
  }

  componentWillReceiveProps(nextProps: FilterValueListPropType) {
    if (nextProps.selectedFilterLabels !== this.props.selectedFilterValues) {
      this.setState(() => ({
        selectedFilterLabels: nextProps.selectedFilterLabels,
        filterOptions: nextProps.filterOptions,
      }))
    }
  }

  onFilterValueChecked = (isFilterSelected: boolean, filterLabel: string) => {
    const filteredSelectedFilterLabels = this.state.selectedFilterLabels.filter(
      selectedFilter => selectedFilter !== filterLabel,
    )
    const modifiedFilterLabels = isFilterSelected
      ? [...filteredSelectedFilterLabels, filterLabel]
      : filteredSelectedFilterLabels
    this.setState(() => ({ selectedFilterLabels: modifiedFilterLabels }))
    if (this.props.onFilterValueChange) {
      this.props.onFilterValueChange(modifiedFilterLabels, this.props.name)
    }
  }

  onFilterValueSearched = (textFieldValue) => {
    const filteredOptions = this.props.filterOptions
    this.setState(() => ({filterOptions: filteredOptions.filter((option) => option.name.toLowerCase().includes(textFieldValue.toLowerCase())) }))
  }

  handleRangeFilterChange = (type: string, value: boolean | string, label: string) => {
    const filteredOptions = this.props.filterOptions
    this.props.onRangeFilterChange(filteredOptions, label)
  }

  render() {
    let filterOption
    const renderSearch = renderIf(this.props.filterOptions.length > 5)
    const { type, onRangeFilterChange } = this.props

    return (
      <div className="FilterValueList">
        {
          renderSearch(
            <div className="SearchFilterValues">
              <TextField
                onChanged={(textFieldValue) => this.onFilterValueSearched(textFieldValue)}
                placeholder='Search'
              />
            </div>
          )
        }
        <For each="filterOption" of={this.state.filterOptions} index="index">
          <FilterValue
            filterOption={filterOption}
            filterType={type}
            onFilterValueChecked={this.onFilterValueChecked}
            handleRangeFilterChange={this.handleRangeFilterChange}
          />
        </For>
      </div>
    )
  }
}
