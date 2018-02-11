export type OptionType = {
  name: string,
  label: string,
  options: Array<OptionType>,
}

export type FlattenedOptionType = {
  name: string,
  label: string,
  path: Array<string>,
  haveChildren: boolean,
}
