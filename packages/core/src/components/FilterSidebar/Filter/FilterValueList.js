// @flow

import type { FilterValueType } from 'types/Filter'

import React, { Component } from 'react'

import { FilterValue } from './FilterValue'

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
  }

  componentWillMount() {
    const { selectedFilterNames } = this.props
    this.setState(() => ({ selectedFilterNames: selectedFilterNames }))
  }

  componentWillReceiveProps(nextProps: FilterValueListPropType) {
    if (nextProps.selectedFilterNames !== this.props.selectedFilterValues) {
      this.setState(() => ({
        selectedFilterNames: nextProps.selectedFilterNames,
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

  render() {
    const { filterOptions } = this.props
    let filterOption

    return (
      <div className="FilterValueList">
        <For each="filterOption" of={filterOptions} index="index">
          <FilterValue filterOption={filterOption} onFilterValueChecked={this.onFilterValueChecked} />
        </For>
      </div>
    )
  }
}
