// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import { DatePicker } from 'components/DatePicker'
import moment from 'moment'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type PartFilterValueProps = {
  filterOption: FilterValueType,
  onFilterValueChecked: Function
}

const PartFilterValue = ({ filterOption, onFilterValueChecked }: PartFilterValueProps) => (<div className="filterActionGroup">
  <div className="checkBox">
    <Checkbox
      handleChange={(e, isFilterSelected) => onFilterValueChecked(isFilterSelected, filterOption.label)}
      isChecked={filterOption.isSelected}
    />
  </div>
  <div className="label">{filterOption.label} </div>
  <div className="count">{filterOption.count && `(${filterOption.count})`}</div>
</div>
)

export default PartFilterValue