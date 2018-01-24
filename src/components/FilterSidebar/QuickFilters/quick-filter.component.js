// @flow

import type { QuickFilterType } from 'types/Filter'

import React from 'react'
import cn from 'classnames'
import ReactTooltip from 'react-tooltip'

import './quick-filter.component.scss'

type QuickFilterPropType = {
  quickFilter: QuickFilterType,
  onQuickFiltersChange: string => void,
  isSelected: boolean,
}

const QuickFilter = ({ quickFilter, onQuickFiltersChange, isSelected = false }: QuickFilterPropType) => (
  <div
    data-tip={quickFilter.tooltipText}
    className={cn('QuickFilter', { active: isSelected })}
    onClick={() => onQuickFiltersChange(quickFilter.name)}
  >
    <ReactTooltip />
    <div className="icon">{quickFilter.icon}</div>
    <div className="count">{quickFilter.count}</div>
  </div>
)

export default QuickFilter
