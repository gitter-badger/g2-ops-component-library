// @flow
import type { FilterType } from 'types/Filter'

import React from 'react'
import Card, { CardHeader, CardText } from 'components/Card/Card'
import FilterValueList from './filter-value-list.component'

import filterStyles from './filter.component.style'

type FilterPropType = {
  filter: FilterType,
  filterHeaderStyle?: Object,
  filterContentStyle?: Object,
  filterStyle?: Object,
  onFilterChange: (Array<string>, string) => void,
}

const filterDefaultProps = {
  filterHeaderStyle: {},
  filterContentStyle: {},
  filterStyle: {},
}

const Filter = ({ filter, filterStyle, filterHeaderStyle, filterContentStyle, onFilterChange }: FilterPropType) => (
  <Card containerStyle={{ ...filterStyles.filterStyle, ...filterStyle }}>
    <CardHeader
      title={filter.label}
      titleStyle={{ fontSize: '14px' }}
      actAsExpander
      showExpandableButton
      style={{ ...filterStyles.filterHeaderStyle, ...filterHeaderStyle }}
    />
    <CardText expandable style={{ ...filterStyles.filterContentStyle, ...filterContentStyle }}>
      <FilterValueList
        filterOptions={filter.filterOptions}
        name={filter.name}
        onFilterValueChange={onFilterChange}
        selectedFilterLabels={filter.selectedValues}
      />
    </CardText>
  </Card>
)

Filter.defaultProps = filterDefaultProps

export default Filter
