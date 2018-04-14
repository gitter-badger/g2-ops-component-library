// @flow

import countryMapper, { currencyDisplayMap } from './countryMapper'

export const serialize = (countryCode: string, inputValue: string): number => {
  switch (countryCode.toUpperCase()) {
    case 'IN':
      return parseFloat(inputValue.replace(/[^\d.]/g, ''))
    case 'DE':
    case 'ES': {
      const commasToPoints = inputValue.replace(/\D|\./g, (matched) => (matched === ',' ? '.' : ''))
      return parseFloat(commasToPoints)
    }
    default:
      return 0.0
  }
}

export const getItem = (key: string): ?string => {
  const value = localStorage.getItem(key)
  return value && JSON.parse(value)
}

export const CURRENCY_STRIP_DOWN_REGEX_UK = /[^0-9.]+/g
export const CURRENCY_STRIP_DOWN_REGEX_US = /^[$-]?(\d+)[,]?(\d{0,3}\.?\d*)/
export const CURRENCY_STRIP_DOWN_REGEX = (countryCode: string): RegExp =>
  ({
    US: CURRENCY_STRIP_DOWN_REGEX_US,
    UK: CURRENCY_STRIP_DOWN_REGEX_UK,
  }[countryCode || 'US'])

export const countryLocaleMapper = (countryCode: string): string =>
  ({
    DEU: 'de-DE',
    ESP: 'de-DE',
    IND: 'en-IN',
  }[countryCode])

export const currencyReplaceValue = (countryCode: string): string =>
  ({
    US: '$1$2',
    UK: '',
  }[countryCode || 'US'])

const formatCurrency = (country: string, value: string, currencyStyle: string, clocale: ?string = null): string =>
  `${new Intl.NumberFormat(clocale || countryMapper(country).locale, {
    style: 'currency',
    currency: `${currencyStyle}`,
    currencyDisplay: `${currencyDisplayMap(currencyStyle) || 'symbol'}`,
  }).format(value)}`

export default formatCurrency

export const stripDownCurrency = (country: string, currencyValue: string = '') =>
  currencyValue.toString().replace(CURRENCY_STRIP_DOWN_REGEX(country), currencyReplaceValue(country))

/*
  This function rounds off a given currency field value to 2 declimals by default.
  2 decimals is a standard for payment fields across other applications as well.
*/
export const roundCurrency = (value: string, roundOffDecimal: number = 2) => +(+value || 0).toFixed(roundOffDecimal)
