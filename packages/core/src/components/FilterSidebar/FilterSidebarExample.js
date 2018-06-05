// @flow
import type { QuickFilterType, FilterType } from 'types/Filter'
import type { Node } from 'react'

import React, { Component } from 'react'

import { FilterSidebar } from './FilterSidebar'
import filters, { quickLinks } from './MockData/FilterMockData'

class ComponentExample extends Component<Object, Object> {
  state = {}
  render() {
    return (
      <FilterSidebar
        filters={filters}
        onFilterChange={(obj) => { console.log('on filter change ',obj) }}
        onQuickFiltersChange={(obj) => { console.log('on quick filter change ', obj) }}
        onFiltersClear={() => { console.log('on filters clear ') }}
        quickFilters={quickLinks}
        selectedQuickFilter={"dispatch"}
        height={'450px'}
        width={'350px'}
      />
    )
  }
}

export default ComponentExample

