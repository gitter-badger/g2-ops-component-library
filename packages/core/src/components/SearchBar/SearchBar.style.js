const lightColorStyle = { color: '#fff' }
const darkColorStyle = { color: '#000'}
const getTextColor = (themeVariant) => (themeVariant === 'dark'? darkColorStyle: lightColorStyle)
const darkStyles = {
  checkboxCheckedHovered: {
    borderColor: '#000',
    background: '#fff',
  },
  checkboxCheckedFocused: {
    background: '#fff',
    borderColor: '#000',
  },
  checkboxChecked: {
    background: '#fff',
    borderColor: '#000',
  },
  checkmark: {
    opacity: '0',
    color: 'black',
  },
  checkmarkChecked: {
    opacity: '1',
  },
  text: {
    color: '#000',
    fontSize: '12px',
  },
  textHovered: {
    color: '#000'
  },
  textFocused: {
    color: '#000'
  },
}
const lightStyles = {
  checkboxCheckedHovered: {
    borderColor: '#fff',
    background: '#fff',
  },
  checkboxCheckedFocused: {
    background: '#fff',
    borderColor: '#fff',
  },
  checkbox: {
    background: '#fff',
  },
  checkboxChecked: {
    background: '#fff',
    borderColor: '#fff',
  },
  checkmark: {
    opacity: '0',
    color: '#000',
  },
  checkmarkChecked: {
    opacity: '1',
    color: '#000',
  },
  text: {
    color: '#fff',
    fontSize: '12px',
  },
  textHovered: {
    color: '#fff'
  },
  textFocused: {
    color: '#fff'
  },
}
export const checkboxStyle = (themeVariant) => themeVariant==='dark'? darkStyles: lightStyles

export default {}
