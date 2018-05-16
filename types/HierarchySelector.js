export type OptionType = {
  id: string,
  label: string,
  level: string,
  options: Array<OptionType>,
}

export type FlattenedOptionType = {
  id: string,
  label: string,
  level: string,
  display: any,
  path: Array<string>,
  hierarchy: Object,
}
