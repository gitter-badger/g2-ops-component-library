import countryMapper, { currencyDisplayMap } from './countryMapper'

// function to format currency - takes in value and the currencyStyle
const { locale } = countryMapper('DE' || 'US')
const countryCode = 'DE'

export const getItem = (key) => {
  const value = localStorage.getItem(key)
  return value && JSON.parse(value)
}

export const CURRENCY_STRIP_DOWN_REGEX_UK = /[^0-9\.]+/g
export const CURRENCY_STRIP_DOWN_REGEX_US = /^[\$-]?(\d+)[,]?(\d{0,3}\.?\d*)/
export const CURRENCY_STRIP_DOWN_REGEX = {
  US: CURRENCY_STRIP_DOWN_REGEX_US,
  UK: CURRENCY_STRIP_DOWN_REGEX_UK,
}[countryCode || 'US']

export const countryLocaleMapper = (cntryCode) =>
  ({
    DEU: 'de-DE',
    ESP: 'de-DE',
    IND: 'en-IN',
  }[cntryCode])

export const currencyReplaceValue = {
    US: '$1$2',
    UK: '',
  }[countryCode || 'US']

const formatCurrency = (value, currencyStyle, clocale = null) =>
  `${new Intl.NumberFormat(clocale || locale, {
    style: 'currency',
    currency: `${currencyStyle}`,
    currencyDisplay: `${currencyDisplayMap(currencyStyle) || 'symbol'}`,
  }).format(value)}`

export default formatCurrency

export const zeroDollars = (currencyCode) => formatCurrency(0, currencyCode)

export const stripDownCurrency = (currencyValue = '') =>
  currencyValue.toString().replace(CURRENCY_STRIP_DOWN_REGEX, currencyReplaceValue)

/*
  This function rounds off a given currency field value to 2 declimals by default.
  2 decimals is a standard for payment fields across other applications as well.
*/
export const roundCurrency = (value, roundOffDecimal = 2) => +(+value || 0).toFixed(roundOffDecimal)
//
// /*
//   Returns the default currency for the present environment. Mainly used in C stack.
// */
// export const defaultCurrency = () =>
//   (countryCode === 'UK'
//     ? propOr('GBP', 'selectedCurrency', getItem('dashboard'))
//     : propOr('USD', 'currency', countryMapper(propOr(countryCode, 'selectedCountry', getItem('dashboard')))))
