export type FilterValueType = {
  name: string,
  label: string,
  count: number,
}

export type FilterType = {
  name: string,
  label: string,
  filters: Array<FilterValueType>,
  selectedValues: Array<string>,
}

export type QuickFilterType = {
  name: string,
  label: string,
  icon: any,
  count: number,
  tooltipText: string,
}

export type FilterChipType = {
  filterName: string,
  chipLabel: string,
}
