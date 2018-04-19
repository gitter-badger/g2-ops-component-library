// @flow
import type { QuickFilterType, FilterType } from 'types/Filter'
import type { Node } from 'react'

import React, { Component } from 'react'
import renderIf from 'render-if'

import {QuickFilters} from 'components/FilterSidebar/QuickFilters'
import {Filters} from 'components/FilterSidebar/Filters'
import { wrapMuiContext } from '../../../wrapMuiContext'
import {FilterSwitcher} from './FilterSwitcher'
import './FilterSidebar.scss'

type FilterSidebarPropType = {
  selectedQuickFilter: string,
  quickFilters: Array<QuickFilterType>,
  filters: Array<FilterType>,
  onFilterChange: (Array<string>, string) => void,
  onFiltersClear: () => void,
  onQuickFiltersChange: (string) => void,
  children: Node,
  width: string,
  height: string,
}

type FilterSidebarStateType = {
  filterDrawerOpen: boolean,
}

class FilterSidebarComponent extends Component<FilterSidebarPropType, FilterSidebarStateType> {
  static defaultProps = {
    quickFilters: [],
    selectedQuickFilter: 'lots',
  }

  state = { filterDrawerOpen: false }

  toggleFilterDrawer = () => {
    this.setState(({ filterDrawerOpen }) => ({
      filterDrawerOpen: !filterDrawerOpen,
    }))
  }

  render() {
    const {
      quickFilters,
      filters,
      onFilterChange,
      onQuickFiltersChange,
      selectedQuickFilter,
      onFiltersClear,
      height,
      width,
    } = this.props
    const renderIfFilterDrawerOpen = renderIf(this.state.filterDrawerOpen)
    return (
      <div className="FilterSidebar" style={{ height }}>
        <div className="filtersOptions">
          <div className="filterSwitcher">
            <FilterSwitcher onFilterOpen={this.toggleFilterDrawer} open={this.state.filterDrawerOpen} />
          </div>
          <div className="quickFilters">
            <QuickFilters
              quickFilters={quickFilters}
              selectedQuickFilter={selectedQuickFilter}
              onQuickFiltersChange={onQuickFiltersChange}
            />
          </div>
          {this.props.children}
        </div>
        <div className={`filters ${this.state.filterDrawerOpen ? 'open' : ''}`}>
          {renderIfFilterDrawerOpen(
            <Filters width={width} filters={filters} onFilterChange={onFilterChange} onFiltersClear={onFiltersClear} />,
          )}
        </div>
      </div>
    )
  }
}

export const FilterSidebar = wrapMuiContext(FilterSidebar)
