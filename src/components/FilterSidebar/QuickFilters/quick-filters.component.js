// @flow

import type { QuickFilterType } from 'types/Filter'

import React, { Component } from 'react'

import QuickFilter from './quick-filter.component'

type QuickFiltersPropType = {
  quickFilters: Array<QuickFilterType>,
  selectedQuickFilter: string,
  onQuickFiltersChange?: (string) => void,
}

type QuickFiltersStateType = {
  selectedQuickFilter: string,
}

class QuickFilters extends Component<QuickFiltersPropType, QuickFiltersStateType> {
  static defaultProps = {
    quickFilters: [],
  }

  state = { selectedQuickFilter: '' }

  componentWillMount() {
    const { selectedQuickFilter } = this.props
    this.setState(() => ({ selectedQuickFilter }))
  }

  componentWillReceiveProps(nextProps: QuickFiltersPropType) {
    if (nextProps.selectedQuickFilter !== this.props.selectedQuickFilter) {
      this.setState(() => ({ selectedQuickFilter: nextProps.selectedQuickFilter }))
    }
  }

  handleQuickFilterChange = (quickFilter: string) => {
    this.setState(() => ({ selectedQuickFilter: quickFilter }))
    if (this.props.onQuickFiltersChange) {
      this.props.onQuickFiltersChange(quickFilter)
    }
  }

  render() {
    const { quickFilters } = this.props
    const { selectedQuickFilter } = this.state
    return (
      <div className="QuickFilters">
        {quickFilters.map((quickFilter) => (
          <QuickFilter
            quickFilter={quickFilter}
            onQuickFiltersChange={this.handleQuickFilterChange}
            isSelected={selectedQuickFilter === quickFilter.name}
          />
        ))}
      </div>
    )
  }
}

export default QuickFilters
