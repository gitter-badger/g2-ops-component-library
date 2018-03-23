export type OptionType = {
  id: string,
  label: string,
  level: string,
  options: Array<OptionType>,
  isDisabled?: boolean,
  display: any,
}

export type FlattenedOptionType = {
  id: string,
  label: string,
  level: string,
  isDisabled?: boolean,
  display: any,
  path: Array<string>,
  isExpired?: boolean,
  haveChildren: boolean,
  hierarchy: Object,
}
