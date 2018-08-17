// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import { DatePicker } from 'components/DatePicker'
import moment from 'moment'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type PartFilterValueProps = {
  filterOption: FilterValueType,
  onFilterValueChecked: Function,
}

const PartFilterValue = ({
  filterOption,
  onFilterValueChecked,
}: PartFilterValueProps) => {
  const count = filterOption.count ? `(${filterOption.count})` : ''
  const label = filterOption.label
  return (
    <div className="filterActionGroup">
      <div className="checkBox">
        <Checkbox
          handleChange={(e, isFilterSelected) =>
            onFilterValueChecked(isFilterSelected, filterOption.name)
          }
          isChecked={filterOption.isSelected}
        />
      </div>
      <div className="label" title={`${label}${count}`}>{label} </div>
      <div className="count">{count}</div>
    </div>
  )
}

export default PartFilterValue
