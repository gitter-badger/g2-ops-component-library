// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import './filter-value.component.scss'


type FilterValuePropType = {
  filterOption: FilterValueType,
  onFilterValueChecked: (boolean, string) => void,
}

const FilterValue = ({ filterOption, onFilterValueChecked }: FilterValuePropType) => (
  <div className="FilterValue">
    <div className="filterActionContainer">
      <div className="checkBox">
        <Checkbox
          onCheck={(e, isFilterSelected) => onFilterValueChecked(isFilterSelected, filterOption.label)}
          checked={filterOption.isSelected}
        />
      </div>
      <div className="label">{filterOption.label}</div>
    </div>
  </div>
)

export default FilterValue
