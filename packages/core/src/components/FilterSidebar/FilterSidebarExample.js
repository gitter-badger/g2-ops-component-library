// @flow
import type { QuickFilterType, FilterType } from 'types/Filter'
import type { Node } from 'react'
import { assoc, compose, empty, findIndex, propEq,__, adjust, evolve, always, map, clone,filter } from 'ramda'
import React, { Component } from 'react'

import { FilterSidebar } from './FilterSidebar'
import filters, { quickLinks } from './MockData/FilterMockData'

const clearFilterData =
  map(
    (currentFilter) => {
      console.log(currentFilter, 'currentFilter')
      const filterOptionsWithClear = map((currentOption)=>{
        const unselectedOption= assoc('isSelected',false)(currentOption)
        return currentFilter.type!=='range'? filterOptionsWithClear: assoc('name',null,unselectedOption)
      })(currentFilter.filterOptions)
      return {...currentFilter,filterOptions: filterOptionsWithClear, selectedValues: []}
    }
  )

class ComponentExample extends Component<Object, Object> {
  state = {
    filtersState: filters,
  }
  handleFilterClear = () => {
    const { filtersState } = this.state
    const clearedFilters = clearFilterData(filtersState)
    console.log(clearedFilters,'After clear')
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

  handleChangeInRangeFilter = (filterOptions: Array<FilterType>, filterName: string) => {
    console.log(filterOptions, 'filter')
    const { filtersState } = this.state
    const selectedValues = compose(map(elem => `${elem.label}:${elem.name}`),filter(propEq('isSelected',true)))(filterOptions)
    const updatedValue = compose(adjust(evolve({
    selectedValues: always(selectedValues),
    filterOptions: always(filterOptions)
    }),
    __,
    filtersState),
    findIndex(propEq('name', filterName)))(filtersState)
    this.setState({
      filtersState: updatedValue
    })
  }


  render() {
    return (
      <FilterSidebar
        filters={this.state.filtersState}
        onFilterChange={this.handleFilterChange}
        onRangeFilterChange={this.handleChangeInRangeFilter}
        onQuickFiltersChange={(obj) => { console.log('on quick filter change ', obj) }}
        onFiltersClear={this.handleFilterClear}
        quickFilters={quickLinks}
        selectedQuickFilter={"dispatch"}
        height={'450px'}
        width={'300px'}
      />
    )
  }
}

export default ComponentExample
