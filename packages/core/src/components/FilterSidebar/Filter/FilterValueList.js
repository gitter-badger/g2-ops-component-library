// @flow

import type { FilterValueType } from 'types/Filter'
import React, { Component } from 'react'
import renderIf from 'render-if'
import { TextField } from 'components/TextField'
import { FilterValue } from './FilterValue'
import './FilterValueList.scss'

type FilterValueListPropType = {
  filterOptions: Array<FilterValueType>,
  selectedFilterNames: Array<string>,
  selectedFilterValues?: Array<string>,
  onFilterValueChange: (Array<string>, string) => void,
  name: string,
}

type FilterValueListStateType = {
  selectedFilterNames: Array<string>,
}

export class FilterValueList extends Component<FilterValueListPropType, FilterValueListStateType> {
  state = {
    selectedFilterNames: [],
    filterOptions: {},
  }

  componentWillMount() {
    const { selectedFilterNames, filterOptions } = this.props
    this.setState(() => ({ selectedFilterNames: selectedFilterNames }))
    this.setState(() => ({ filterOptions: filterOptions }))
  }

  componentWillReceiveProps(nextProps: FilterValueListPropType) {
    if (nextProps.selectedFilterNames !== this.props.selectedFilterValues) {
      this.setState(() => ({
        selectedFilterNames: nextProps.selectedFilterNames,
        filterOptions: nextProps.filterOptions,
      }))
    }
  }

  onFilterValueChecked = (isFilterSelected: boolean, filterName: string) => {
    const filteredSelectedFilterNames = this.state.selectedFilterNames.filter(
      selectedFilter => selectedFilter !== filterName,
    )
    const modifiedFilterNames = isFilterSelected
      ? [...filteredSelectedFilterNames, filterName]
      : filteredSelectedFilterNames
    this.setState(() => ({ selectedFilterNames: modifiedFilterNames }))
    if (this.props.onFilterValueChange) {
      this.props.onFilterValueChange(modifiedFilterNames, this.props.name)
    }
  }

  onFilterValueSearched = (textFieldValue) => {
    const filteredOptions = this.props.filterOptions
    this.setState(() => ({ filterOptions: filteredOptions.filter((option) => option.name.toLowerCase().includes(textFieldValue.toLowerCase())) }))
  }

  render() {
    let filterOption
    const renderSearch = renderIf(this.props.filterOptions.length > 5)

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
          <FilterValue filterOption={filterOption} onFilterValueChecked={this.onFilterValueChecked} />
        </For>
      </div>
    )
  }
}
