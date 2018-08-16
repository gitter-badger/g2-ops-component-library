// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import { DatePicker } from 'components/DatePicker'
import moment from 'moment'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type RangeFilterValueProps = {
  filterOption: FilterValueType,
  handleRangeFilterChange: Function,
}
type RangeFilterValueState = {
  newDate: {}
}

class RangeFilterValue extends React.Component<RangeFilterValueProps, RangeFilterValueState> {
  state = {
    newDate: {},
  }
  
  render() {
    const { filterOption, handleRangeFilterChange } = this.props
    
    return (<div>
      <div style={{ paddingLeft: '30px' }}>{filterOption.label}</div>
      <div className="filterActionGroup">
        <div className="checkBox">
          <Checkbox
            handleChange={(e, isFilterSelected) => handleRangeFilterChange('checkbox', isFilterSelected, filterOption.label)}
            isChecked={filterOption.isSelected}
          />
        </div>
        <div className="dataPicker">
          <DatePicker
            value={this.state.newDate}
            onChange={(e, dateValue) =>
              this.setState({newDate: dateValue},() => {
                handleRangeFilterChange('date', JSON.stringify(dateValue), filterOption.label)
              })
            }
            defaultFormat={'DD/MM/YYYY'}
          />
        </div>
      </div>
    </div>
    )
  }
}

export default RangeFilterValue