export type OptionType = {
  id: string,
  label: string,
  level: string,
  expiresOn: string,
  isExpired?: boolean,
  isDisabled?: boolean,
  p_card_flag?: boolean,
  options: Array<OptionType>,
}

export type FlattenedOptionType = {
  id: string,
  label: string,
  level: string,
  isExpired?: boolean,
  isDisabled?: boolean,
  display: any,
  path: Array<string>,
  haveChildren: boolean,
  hierarchy: Object,
}
