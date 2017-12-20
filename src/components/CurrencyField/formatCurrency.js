export const serialize = (countryCode, inputValue) => {
  switch (countryCode.toUpperCase()) {
    case 'IN':
      return parseFloat(inputValue.replace(/[^\d.]/g, ''))
    case 'DE':
    case 'ES': {
      const commasToPoints = inputValue.replace(/\D|\./g, (matched) => (matched === ',' ? '.' : ''))
      return parseFloat(commasToPoints)
    }
    default:
  }
}
const isDigit = (char) => char.match(/^\d$/)
export const getFormatterRTL = (TEMPLATE) => (intermediaryValueM, charsDiff, intermediarySelectionStartM) => {
  const isNegative = intermediaryValueM.startsWith('-')
  const intermediaryValue = isNegative ? intermediaryValueM.slice(1) : intermediaryValueM
  const intermediarySelectionStart = intermediarySelectionStartM + (isNegative ? 1 : 0)
  const templateCharDeleted = TEMPLATE[intermediarySelectionStart] !== '@'
  const withoutDeletedDigits =
    charsDiff === -1 && templateCharDeleted // what was deleted was a template character
      ? intermediaryValue.slice(0, intermediarySelectionStart).replace(/\d\D@$/, '') + // remove template characters before these
        intermediaryValue.slice(intermediarySelectionStart)
      : intermediaryValue

  if (withoutDeletedDigits.replace(/[^\d.,]/g, '') === '') {
    return ''
  }
  const index = (i) => TEMPLATE.length - i
  const minus = isNegative ? '-' : ''
  return (
    minus +
    [...withoutDeletedDigits.padStart(3, '0')].reduceRight((output, char) => {
      const position = index(output.length)

      let newChars
      if (output.length === TEMPLATE.length || !isDigit(char)) {
        newChars = char === TEMPLATE[position] ? char : ''
      } else {
        const nonDigitsAfter = TEMPLATE.slice(position).match(/^[^@]+/) || []
        const nonDigitsBefore = TEMPLATE.slice(0, position).match(/[^@]+$/) || []
        newChars = nonDigitsAfter + char + nonDigitsBefore
      }
      return newChars + output
    }, '')
  )
}
const formatIndianNumber = getFormatterRTL('@@,@@,@@,@@,@@@.@@')
const formatEuros = getFormatterRTL('@@@.@@@.@@@.@@@,@@ €')
const FORMATS = {
  DE: formatEuros,
  ES: formatEuros,
  IN: (...args) => {
    const result = formatIndianNumber(...args)
    return result && `₹${result}`
  },
}

export const format = (countryCode, number) => {
  const newValue = String(number).replace(/[^\d.,]/g, '')
  return FORMATS[countryCode](newValue)
}

export const formatWithNegativeNumbers = (countryCode, number) => {
  const newValue = String(number).replace(/((?!^)-|[^\d\-.,])/g, '')
  return FORMATS[countryCode](newValue)
}

export const displayFormattedCurrencyValue = (country, value = 0.0) => format(country, (value * 100).toFixed())
