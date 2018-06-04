// @flow
import type { QuickFilterType, FilterType } from 'types/Filter'
import type { Node } from 'react'

import React, { Component } from 'react'
// import renderIf from 'render-if'
import { FilterSidebar } from './FilterSidebar'

import filters, { quickLinks } from './MockData/FilterMockData'


const ComponentExample = () => (
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

export default ComponentExample

