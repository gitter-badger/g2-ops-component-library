// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import { DatePicker } from 'components/DatePicker'
import moment from 'moment'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type RangeFilterValueProps = {
  filterOption: FilterValueType,
  handleRangeFilterChange: (type: 'checkbox'| 'date',value: string, label:string, filterName: string) => mixed,
}
type RangeFilterValueState = {
  newDate: Date|null,
}

class RangeFilterValue extends React.Component<
  RangeFilterValueProps,
  RangeFilterValueState,
> {
  constructor(props: RangeFilterValueProps){
    super(props)
    const { filterOption: {
      name
    }={
      name: null
    }} = props
    const dateValue = name ? new Date(name): null
    this.state = {
      newDate: dateValue
    }
  }

  render() {
    const { filterOption, handleRangeFilterChange } = this.props
    return (
      <div>
        <div style={{ paddingLeft: '30px' }}>{filterOption.label}</div>
        <div className="filterActionGroup">
          <div className="checkBox">
            <Checkbox
              handleChange={(e, isFilterSelected) => {
                handleRangeFilterChange(
                  'checkbox',
                  isFilterSelected,
                  filterOption.label,
                  filterOption.name,
                )
              }

              }
              isChecked={filterOption.isSelected}
            />
          </div>
          <div className="dataPicker">
            <DatePicker
              value={this.state.newDate}
              autoOk
              onChange={(e, dateValue) =>
                this.setState({ newDate: dateValue }, () => {
                  handleRangeFilterChange(
                    'date',
                    moment(dateValue).format(),
                    filterOption.label,
                    filterOption.name,
                  )
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
