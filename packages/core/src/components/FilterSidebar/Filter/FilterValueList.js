// @flow

import type { FilterValueType } from 'types/Filter'
import React, { Component } from 'react'
import renderIf from 'render-if'
import { TextField } from 'components/TextField'
import { FilterValue } from './FilterValue'
import './FilterValueList.scss'

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
    this.setState(() => ({ filterOptions: filteredOptions.filter((option) => option.name.toLowerCase().includes(textFieldValue)) }))
  }

  render() {
    let filterOption
    const renderSearch = renderIf(this.props.filterOptions.length > 5)

    return (
      <div className="FilterValueList">
        {
          renderSearch(
            <div style={{ padding: '0px 12px 5px 3px' }}>
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
