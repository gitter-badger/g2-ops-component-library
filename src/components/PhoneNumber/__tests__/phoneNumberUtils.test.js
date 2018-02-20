import { getCountryDialCode, stripDownPhoneNumber } from '../phoneNumberUtils'

describe('Phone Number getCountryDialCode util', () => {
  test('to return dial code for a valid country code', () => {
    expect(getCountryDialCode('de')).toBe('49')
  })
  test('to return empty string for an invalid country code', () => {
    expect(getCountryDialCode('test')).toBe('')
  })
  test('to return empty string if no country code is passed', () => {
    expect(getCountryDialCode()).toBe('')
  })
})

describe('Phone Number stripDownPhoneNumber util', () => {
  test('to return unformatted phone number', () => {
    expect(stripDownPhoneNumber('+469-664-5000')).toBe('4696645000')
  })
  test('to return empty string if nothing is passed', () => {
    expect(stripDownPhoneNumber()).toBe('')
  })
})
