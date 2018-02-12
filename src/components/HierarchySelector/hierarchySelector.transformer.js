// @flow

import type { OptionType, FlattenedOptionType } from 'types/HierarchySelector'

import { isEmpty, isNil, or } from 'ramda'

const isBlank: (any) => boolean = or(isNil, isEmpty)

const flattenOption = (option: OptionType, path: Array<string> = []): Array<FlattenedOptionType> => {
  if (isEmpty(option)) {
    return []
  }
  const currentPath = [ ...path, option.label ]
  const flattenedOption = [
    { name: option.name, label: option.label, path: currentPath, haveChildren: !isBlank(option.options) },
  ]
  if (!option.options || isEmpty(option.options)) {
    return flattenedOption
  }
  return option.options.reduce(
    (accu, childOption) => [ ...accu, ...flattenOption(childOption, [ ...currentPath ]) ],
    flattenedOption,
  )
}

export const flattenNestedOptions = (options: Array<OptionType>): Array<FlattenedOptionType> =>
  options.reduce((flattenedOptions, option) => [ ...flattenedOptions, ...flattenOption(option) ], [])

export default flattenNestedOptions
