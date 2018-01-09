// @flow

import type { FilterValueType } from 'types/Filter'

import React, { Component } from 'react'

import FilterValue from './filter-value.component'

type FilterValueListPropType = {
  filterOptions: Array<FilterValueType>,
  onFilterValueChange: (Array<string>, string) => void,
  name: string,
}

type FilterValueListStateType = {
  selectedFilterLabels: Array<string>,
}

class FilterValueList extends Component<FilterValueListPropType, FilterValueListStateType> {
  state = {
    selectedFilterLabels: [],
  }

  onFilterValueChecked = (isFilterSelected: boolean, filterLabel: string) => {
    const filteredSelectedFilterLabels = this.state.selectedFilterLabels.filter(
      (selectedFilter) => selectedFilter !== filterLabel
    )
    const modifiedFilterLabels = isFilterSelected
      ? [...filteredSelectedFilterLabels, filterLabel]
      : filteredSelectedFilterLabels
    this.setState(() => ({ selectedFilterLabels: modifiedFilterLabels }))
    if (this.props.onFilterValueChange) {
      this.props.onFilterValueChange(modifiedFilterLabels, this.props.name)
    }
  }

  render() {
    const { filterOptions } = this.props
    return (
      <div className="FilterValueList">
        {filterOptions.map((filterOption) => (
          <FilterValue filterOption={filterOption} onFilterValueChecked={this.onFilterValueChecked} />
        ))}
      </div>
    )
  }
}

export default FilterValueList
