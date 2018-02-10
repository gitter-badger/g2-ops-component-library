// @flow

import React from 'react'
import cn from 'classnames'
import IconButton from 'material-ui/IconButton'
import FilterSwitcherIcon from './FilterSwitcher.Icon'

import './filter-switcher.component.scss'

type FilterSwitcherPropType = {
  open: boolean,
  onFilterOpen: () => void,
}

const FilterSwitcher = ({ open = false, onFilterOpen }: FilterSwitcherPropType) => (
  <div className={cn('FilterSwitcher', { active: open })}>
    <IconButton onClick={onFilterOpen}><FilterSwitcherIcon /></IconButton>
  </div>
)

export default FilterSwitcher
