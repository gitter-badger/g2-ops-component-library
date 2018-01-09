// @flow
import type { QuickFilterType, FilterType } from 'types/Filter'

import React, { Component } from 'react'
import renderIf from 'render-if'
import cn from 'classnames'

import QuickFilters from 'components/FilterSidebar/QuickFilters'
import Filters from 'components/FilterSidebar/Filters'
import { wrapMuiContext } from '../../../wrapMuiContext'
import FilterSwitcher from './filter-switcher.component'
import './filter-sidebar.component.scss'

type FilterSidebarComponentPropType = {
  selectedQuickFilter: string,
  quickFilters: Array<QuickFilterType>,
  filters: Array<FilterType>,
  onFilterChange: (Array<string>, string) => void,
  onQuickFiltersChange: string => void,
}

type FilterSidebarComponentStateType = {
  filterDrawerOpen: boolean,
}

class FilterSidebarComponent extends Component<FilterSidebarComponentPropType, FilterSidebarComponentStateType> {
  static defaultProps = {
    quickFilters: [],
    selectedQuickFilter: 'lots',
  }

  state = { filterDrawerOpen: false }

  toggleFilterDrawer = () => {
    this.setState(({ filterDrawerOpen }) => ({ filterDrawerOpen: !filterDrawerOpen }))
  }

  render() {
    const { quickFilters, filters, onFilterChange, onQuickFiltersChange, selectedQuickFilter } = this.props
    const renderIfFilterDrawerOpen = renderIf(this.state.filterDrawerOpen)
    return (
      <div className="FilterSidebar">
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
        </div>
        <div className={cn('filters', { open: this.state.filterDrawerOpen })}>
          {renderIfFilterDrawerOpen(<Filters filters={filters} onFilterChange={onFilterChange} />)}
        </div>
      </div>
    )
  }
}

export default wrapMuiContext(FilterSidebarComponent)
