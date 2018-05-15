// @flow
import type { QuickFilterType, FilterType } from 'types/Filter'
import type { Node } from 'react'

import React, { Component } from 'react'
// import renderIf from 'render-if'
import { FilterSidebar } from './FilterSidebar'

import filters, { quickLinks } from './MockData/FilterMockData'


export default class Example extends Component {
	sup = true
	render() {
		return (
    <FilterSidebar 
			filters={filters}
			onFilterChange={(obj) => { console.log('on filter change ',obj) }}
			onQuickFiltersChange={(obj) => { console.log('onn quick filter change ', obj) }}
			onFiltersClear={() => { console.log('on filters clear ') }}
			quickFilters={quickLinks}
			selectedQuickFilter={"dispatch"}
			height={'450px'}
			width={'350px'}
		/>
		)
	}
}

