// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import { DatePicker } from 'components/DatePicker'
import moment from 'moment'
import RangeFilterValue from './RangeFilterValue'
import PartFilterValue from './PartFilterValue'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type FilterValuePropType = {
  filterOption: FilterValueType,
  onFilterValueChecked: (boolean, string) => void,
  handleRangeFilterChange: (type:'checkbox'|'date',value: boolean|string,label:string,filterName:string) => mixed,
  filterType: string,
}
type FilterValueStateType = {
  datePicker: string,
}

class FilterValue extends React.Component<
  FilterValuePropType,
  FilterValueStateType,
> {
  state = {
    datePicker: '',
  }

  render() {
    const {
      filterType,
      filterOption,
      onFilterValueChecked,
      handleRangeFilterChange,
    } = this.props
    const { datePicker } = this.state

    return (
      <div className="FilterValue">
        <div className="filterActionContainer">
          {filterType === 'range' ? (
            <RangeFilterValue
              filterOption={filterOption}
              handleRangeFilterChange={handleRangeFilterChange}
            />
          ) : (
            <PartFilterValue
              filterOption={filterOption}
              onFilterValueChecked={onFilterValueChecked}
            />
          )}
        </div>
      </div>
    )
  }
}
export default FilterValue
