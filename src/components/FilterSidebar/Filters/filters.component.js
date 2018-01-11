// @flow
import type { FilterType } from 'types/Filter'
import React from 'react'
import Filter from 'components/FilterSidebar/Filter'
import './filters.component.scss'

type FiltersPropType = {
  filters: Array<FilterType>,
  onFilterChange: (Array<string>, string) => void,
}

const Filters = ({ filters = [], onFilterChange, width }: FiltersPropType) => (
  <div className="Filters" style={{ width }}>
    <div className="sectionHeading">
      <div className="label">Filters</div>
    </div>
    <div className="filterSections">
      {filters.map((filter) => <Filter filter={filter} onFilterChange={onFilterChange} />)}
    </div>
  </div>
)

export default Filters
