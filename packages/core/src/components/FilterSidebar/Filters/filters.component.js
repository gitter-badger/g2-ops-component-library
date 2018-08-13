// @flow
import type { FilterType } from 'types/Filter'

import React from 'react'
import { Filter } from 'components/FilterSidebar/Filter'

import './filters.component.scss'

type FiltersPropType = {
  filters: Array<FilterType>,
  onFilterChange: (Array<string>, string) => void,
  onFiltersClear: () => void,
  onRangeFilterChange: Function,
  onFiltersApply: () => void,
  width: string,
  showApply: boolean,
}

export const Filters = ({
    filters = [],
    onFilterChange,
    onRangeFilterChange,
    onFiltersClear,
    onFiltersApply,
    width,
    showApply,
  }: FiltersPropType
  ) => (<div className="Filters" style={{ width }}>
    <div className="sectionHeading">
      <div className="label">Filters</div>
      <div className="filterButtons">
        {showApply && 
          <button onClick={onFiltersApply} className="filterButton">
            Apply
          </button>}
        <button onClick={onFiltersClear} className="filterButton">
          Clear
        </button>
      </div>
    </div>
    <div className="filterSections">
      {filters.map((filter) => (<Filter
        key={filter.name}
        filter={filter}
        onFilterChange={onFilterChange}
        onRangeFilterChange={onRangeFilterChange}
      />
      ))}
    </div>
  </div>
)
