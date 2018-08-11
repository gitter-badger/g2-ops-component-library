// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type FilterValuePropType = {
  filterOption: FilterValueType,
  onFilterValueChecked: (boolean, string) => void,
}

export const FilterValue = ({ filterOption, onFilterValueChecked }: FilterValuePropType) => (
  <div className="FilterValue">
    <div className="filterActionContainer">
      <div className="filterActionGroup">
        <div className="checkBox">
          <Checkbox
            handleChange={(e, isFilterSelected) => onFilterValueChecked(isFilterSelected, filterOption.name)}
            isChecked={filterOption.isSelected}
          />
        </div>
        <div className="label">{filterOption.label} </div>
      </div>
      <div className="count">{filterOption.count && `(${filterOption.count})`}</div>
    </div>
  </div>
)
