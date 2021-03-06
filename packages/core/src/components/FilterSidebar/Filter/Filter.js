// @flow
import type { FilterType } from 'types/Filter'
import React from 'react'
import { Card, CardHeader, CardText } from 'components/Card/Card'
import { FilterValueList } from './FilterValueList'

import { filterStyles } from './Filter.styles'

type FilterPropType = {
  filter: FilterType,
  filterHeaderStyle?: Object,
  filterContentStyle?: Object,
  filterStyle?: Object,
  onFilterChange: (Array<string>, string) => void,
  onRangeFilterChange: Function,
}

export const Filter = ({
  filter,
  filterStyle = {},
  filterHeaderStyle = {},
  filterContentStyle = {},
  onFilterChange,
  onRangeFilterChange,
}: FilterPropType) => (
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
        type={filter.type}
        onFilterValueChange={onFilterChange}
        selectedFilterNames={filter.selectedValues}
        onRangeFilterChange={onRangeFilterChange}
      />
    </CardText>
  </Card>
)
