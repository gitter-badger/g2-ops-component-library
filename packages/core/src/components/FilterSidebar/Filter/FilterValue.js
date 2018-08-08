// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import { DatePicker } from 'components/DatePicker'
import moment from 'moment'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type FilterValuePropType = {
  filterOption: FilterValueType,
  onFilterValueChecked: (boolean, string) => void,
  filterType: string,
}
type FilterValueStateType = {
  datePicker: string,
}

class FilterValue extends React.Component<FilterValuePropType, FilterValueStateType> {
  state = {
    datePicker: '',
  }
  render() {
    const { filterType, filterOption, onFilterValueChecked } = this.props
    const { datePicker } = this.state

    return (
      <div className="FilterValue">
        <div className="filterActionContainer">
          {filterType === 'range'
            ? (<div>
              <div style={{ paddingLeft: '30px' }}>{filterOption.label}</div>
              <div className="filterActionGroup">
                <div className="checkBox">
                  <Checkbox
                    handleChange={(e, isFilterSelected) => onFilterValueChecked(isFilterSelected, filterOption.label)}
                    isChecked={filterOption.isSelected}
                  />
                </div>
                <div className="dataPicker">
                  <DatePicker
                    hintText={'DD/MM/YYYY'}
                    value={datePicker}
                    onChange={(e, dateValue) => console.log(dateValue)}
                    formatDate={date => moment(date, 'DD/MM/YYYY').format('DD/MM/YYYY')}
                  />
                </div>
              </div>
            </div>
            )
            : (<div className="filterActionGroup">
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
          }
        </div>
      </div>
      )
  }
}
export default FilterValue
  
