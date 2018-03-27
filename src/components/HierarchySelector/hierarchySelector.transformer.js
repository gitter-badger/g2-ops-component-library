// @flow

import type { OptionType, FlattenedOptionType } from 'types/HierarchySelector'

import { isEmpty } from 'ramda'
import React from 'react'
import renderIf from 'render-if'

const isBlank = (value: OptionType) => !value || isEmpty(value)

const flattenOption = (
  option: OptionType,
  renderMethod: Function,
  path: Array<string> = [],
  hierarchy: Object = {},
): Array<FlattenedOptionType> => {
  if (isEmpty(option)) {
    return []
  }
  const currentPath = [ ...path, option.label ]
  const currHierarchy = { ...hierarchy, [option.level]: option.id }
  const flattenedOption = [
    {
      ...option,
      path: currentPath,
      hierarchy: currHierarchy,
      haveChildren: !isBlank(option.options),
      display: renderMethod(option),
    },
  ]
  if (!option.options || isEmpty(option.options)) {
    return flattenedOption
  }
  return option.options.reduce(
    (accu: Array<FlattenedOptionType>, childOption: OptionType) => [
      ...accu,
      ...flattenOption(childOption, renderMethod, [ ...currentPath ], currHierarchy),
    ],
    flattenedOption,
  )
}

export const flattenNestedOptions = (options: Array<OptionType>, renderMethod: Function): Array<FlattenedOptionType> =>
  options.reduce(
    (flattenedOptions, option: OptionType) => [ ...flattenedOptions, ...flattenOption(option, renderMethod) ],
    [],
  )

export default flattenNestedOptions
