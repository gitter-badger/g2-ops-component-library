export type OptionType = {
  name: string,
  label: string,
  isDisabled?: boolean,
  options: Array<OptionType>,
}

export type FlattenedOptionType = {
  name: string,
  label: string,
  isDisabled: boolean,
  path: Array<string>,
  haveChildren: boolean,
}
