import countryPhoneData from 'country-telephone-data'
import { pathOr } from 'ramda'
import { AsYouType } from 'libphonenumber-js'

export const getCountryDialCode = (countryCode = '') => {
  const countryPhoneDataIndex = pathOr('', [ 'iso2Lookup', countryCode.toLowerCase() ], countryPhoneData)
  return pathOr('', [ 'allCountries', countryPhoneDataIndex, 'dialCode' ], countryPhoneData)
}

export const stripDownPhoneNumber = (num = '') => num.replace(/\D+/g, '')

export const getFormattedNumber = (value: string = ''): string => {
  const unformattedValue = `+${stripDownPhoneNumber(value)}`
  if (value.length <= 2) {
    return unformattedValue
  } else {
    const asYouTypeFormatter = new AsYouType()
    const formattedNumber = asYouTypeFormatter.input(unformattedValue)
    return formattedNumber
  }
}
