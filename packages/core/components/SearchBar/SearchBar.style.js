const colorStyle = { color: '#fff' }

export const checkboxStyle = {
  checkboxCheckedHovered: {
    borderColor: 'black',
  },
  checkboxCheckedFocused: {
    background: '#fff',
    borderColor: '#fff',
  },
  checkboxChecked: {
    background: '#fff',
    borderColor: '#fff',
  },
  checkmark: {
    opacity: '0',
    color: 'black',
  },
  checkmarkChecked: {
    opacity: '1',
  },
  text: {
    ...colorStyle,
    fontSize: '12px',
  },
  textHovered: colorStyle,
  textFocused: colorStyle,
}

export default {}
