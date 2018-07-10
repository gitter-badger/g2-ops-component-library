// @flow

type FilterStylesType = {
  filterStyle: Object,
  filterHeaderStyle: Object,
  filterContentStyle: Object,
}

export const filterStyles: FilterStylesType = {
  filterStyle: {
    paddingBottom: '0px',
    fontWeight: '500',
    boxSizing: 'border-box',
    position: 'relative',
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    backgroundColor: 'rgb(214, 223, 232)',
    borderBottom: '2px solid rgb(222, 229, 236)',
  },
  filterHeaderStyle: {
    fontSize: '12px',
    padding: '12px',
  },
  filterContentStyle: {
    padding: '16px 0px 16px 10px',
    fontSize: '14px',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'rgb(217, 217, 217)',
  },
}
