// @flow

import type { FilterValueType } from 'types/Filter'

import React, { Component } from 'react'

import FilterValue from './filter-value.component'

type FilterValueListPropType = {
  filterOptions: Array<FilterValueType>,
  selectedFilterLabels: Array<string>,
  selectedFilterValues?: Array<string>,
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

  componentWillMount() {
    const { selectedFilterLabels } = this.props
    this.setState(() => ({ selectedFilterLabels: selectedFilterLabels }))
  }

  componentWillReceiveProps(nextProps: FilterValueListPropType) {
    if (nextProps.selectedFilterLabels !== this.props.selectedFilterValues) {
      this.setState(() => ({
        selectedFilterLabels: nextProps.selectedFilterLabels,
      }))
    }
  }

  onFilterValueChecked = (isFilterSelected: boolean, filterLabel: string) => {
    const filteredSelectedFilterLabels = this.state.selectedFilterLabels.filter(
      (selectedFilter) => selectedFilter !== filterLabel,
    )
    const modifiedFilterLabels = isFilterSelected
      ? [ ...filteredSelectedFilterLabels, filterLabel ]
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