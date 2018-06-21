const lightColorStyle = { color: '#fff' }
const darkColorStyle = { color: '#000'}
const getTextColor = (themeVariant) => (themeVariant === 'dark'? darkColorStyle: lightColorStyle)
export const checkboxStyle = (themeVariant) =>({
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
    ...getTextColor(themeVariant),
    fontSize: '12px',
  },
  textHovered: getTextColor(themeVariant),
  textFocused: getTextColor(themeVariant),
})

export default {}
