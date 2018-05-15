// @flow

import React from 'react'
import IconButton from 'material-ui/IconButton'
import {FilterSwitcherIcon} from './FilterSwitcher.Icon'

import './FilterSwitcher.scss'

type FilterSwitcherPropType = {
  open: boolean,
  onFilterOpen: () => void,
}

export const FilterSwitcher = ({ open = false, onFilterOpen }: FilterSwitcherPropType) => (
  <div className={`FileSwitcher ${open ? 'active' : ''}`}>
    <IconButton onClick={onFilterOpen}>
      <FilterSwitcherIcon />
    </IconButton>
  </div>
)
