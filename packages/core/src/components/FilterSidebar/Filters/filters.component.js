// @flow
import type { FilterType } from 'types/Filter'

import React from 'react'
import { Filter } from 'components/FilterSidebar/Filter'

import './filters.component.scss'

type FiltersPropType = {
  filters: Array<FilterType>,
  onFilterChange: (Array<string>, string) => void,
  onFiltersClear: () => void,
  width: string,
}

export const Filters = ({ filters = [], onFilterChange, onFiltersClear, width }: FiltersPropType) => (
  <div className="Filters" style={{ width }}>
    <div className="sectionHeading">
      <div className="label">Filters</div>
      <div className="clearFilters">
        <button onClick={onFiltersClear} className="clearButton">
          Clear
        </button>
      </div>
    </div>
    <div className="filterSections">
      {filters.map((filter) => {
        return <Filter key={filter.name} filter={filter} onFilterChange={onFilterChange} />
      })}
    </div>
  </div>
)
