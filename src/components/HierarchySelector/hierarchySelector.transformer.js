// @flow

import type { OptionType, FlattenedOptionType } from 'types/HierarchySelector'

import { isEmpty } from 'ramda'

const isBlank = (value: OptionType) => !value || isEmpty(value)

const flattenOption = (option: OptionType, path: Array<string> = []): Array<FlattenedOptionType> => {
  if (isEmpty(option)) {
    return []
  }
  const currentPath = [ ...path, option.label ]
  const flattenedOption = [
    {
      name: option.name,
      label: option.label,
      isDisabled: !!option.isDisabled,
      path: currentPath,
      haveChildren: !isBlank(option.options),
    },
  ]
  if (!option.options || isEmpty(option.options)) {
    return flattenedOption
  }
  return option.options.reduce(
    (accu: Array<FlattenedOptionType>, childOption: OptionType) => [
      ...accu,
      ...flattenOption(childOption, [ ...currentPath ]),
    ],
    flattenedOption,
  )
}

export const flattenNestedOptions = (options: Array<OptionType>): Array<FlattenedOptionType> =>
  options.reduce((flattenedOptions, option: OptionType) => [ ...flattenedOptions, ...flattenOption(option) ], [])

export default flattenNestedOptions
