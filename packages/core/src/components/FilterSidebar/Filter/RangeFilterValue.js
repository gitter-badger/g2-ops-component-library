// @flow

import type { FilterValueType } from 'types/Filter'

import React from 'react'
import {equals} from 'ramda'
import { DatePicker } from 'components/DatePicker'
import moment from 'moment'
import { Checkbox } from '../../Checkbox'
import './FilterValue.scss'

type RangeFilterValueProps = {
  filterOption: FilterValueType,
  handleRangeFilterChange: (type: 'checkbox'| 'date',value: string, label:string, filterName: string) => mixed,
}
type RangeFilterValueState = {
  newDate: Date|'',
}
class RangeFilterValue extends React.Component<
  RangeFilterValueProps,
  RangeFilterValueState,
> {
  constructor(props: RangeFilterValueProps){
    super(props)
    const dateValue = this.getDateValueFromOption(props.filterOption)
    this.state = {
      newDate: dateValue
    }
  }

  componentWillReceiveProps(nextProps: RangeFilterValueProps){
    const {filterOption:{
      name: newName
    }} = nextProps
    const { filterOption: {name: oldName}} = this.props
    if(!equals(oldName,newName)){
      const dateValue = this.getDateValueFromOption(nextProps.filterOption)
      this.setState({
        newDate: dateValue
      })
    }
  }
  getDateValueFromOption = (filterOption:FilterValueType) : Date| ''=> {
    if(!filterOption){
      return ''
    }
    const { name } = filterOption
    return name ? new Date(name): ''
  }
  render() {
    const { filterOption, handleRangeFilterChange } = this.props
    return (
      <div>
        <div style={{ paddingLeft: '30px' }} title={filterOption.label}>{filterOption.label}</div>
        <div className="filterActionGroup">
          <div className="checkBox">
            <Checkbox
              handleChange={(e, isFilterSelected) =>
                handleRangeFilterChange(
                  'checkbox',
                  isFilterSelected,
                  filterOption.label,
                  filterOption.name,
                )
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
