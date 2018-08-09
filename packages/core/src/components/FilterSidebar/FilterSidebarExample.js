// @flow
import type { QuickFilterType, FilterType } from 'types/Filter'
import type { Node } from 'react'
import { assoc, compose, empty, findIndex, propEq,__, adjust, evolve, always, map, clone } from 'ramda'
import React, { Component } from 'react'

import { FilterSidebar } from './FilterSidebar'
import filters, { quickLinks } from './MockData/FilterMockData'

const clearFilterData = compose(
  map(
    evolve({
      selectedValues: empty,
      filterOptions: map(assoc('isSelected', false))
    })
  )
)
class ComponentExample extends Component<Object, Object> {
  state = {
    filtersState: filters
  }
  handleFilterClear = () => {
    const { filtersState } = this.state
    const clearedFilters = clearFilterData(filtersState)
    this.setState({
      filtersState: clearedFilters
    })
  }

  handleFilterChange = (selectedValues: Array<number|string>, filterName: string) => {
    const { filtersState } = this.state
    console.log('on filter change ', selectedValues, filterName)
    
    const updatedValue = compose(adjust(evolve({
    selectedValues: always(selectedValues),
    filterOptions: (filteredValues) =>
      map((filteredValueElem) =>
        selectedValues.includes(filteredValueElem.name)
        ? assoc('isSelected', true)(filteredValueElem)
        : assoc('isSelected', false)(filteredValueElem),
      filteredValues),
    }),
    __,
    filtersState),
    findIndex(propEq('name', filterName)))(filtersState)

    console.log(updatedValue, 'Updated')
    this.setState({
      filtersState: updatedValue,
    })
  }

  handleRangeFilterChange = (filterOptions: any, filterName: string) => {
    const { filtersState } = this.state
    const updatedValue = filtersState.map((filter) => {
      if (filter.name === filterName) {
        const updatedFilter = clone(filter)
        updatedFilter.filterOptions = filterOptions
        console.log('Updated state', updatedFilter)
        this.setState({
          filtersState: updatedValue
        })
      }
    })
  }
  // const dateProps = {
  //   defaultFormat: 'DD/MM/YYYY',
  // }

  render() {
    return (
      <FilterSidebar
        filters={this.state.filtersState}
        onFilterChange={this.handleFilterChange}
        onRangeFilterChange={this.handleRangeFilterChange}
        onQuickFiltersChange={(obj) => { console.log('on quick filter change ', obj) }}
        onFiltersClear={this.handleFilterClear}
        quickFilters={quickLinks}
        selectedQuickFilter={"dispatch"}
        // dateProps={dateProps}
        height={'450px'}
        width={'300px'}
      />
    )
  }
}

export default ComponentExample
