// @flow

const countryCode = 'DE'

export const currencyDisplayMap = (currency: string) =>
  ({
    USD: 'symbol',
    CAD: 'code',
    GBP: 'symbol',
    EUR: 'symbol',
    AED: 'symbol',
    OMR: 'symbol',
    BHD: 'symbol',
  }[currency])

const companyCodeMapper = (country: string) =>
  ({
    US: {
      companyCode: 'COPART',
      locale: 'en-US',
      distanceUnit: 'mi',
      format: 'MM/DD/YYYY',
      region: 'America/Los_Angeles',
      currency: 'USD',
      name: 'USA',
      placeHolder: '$00,000,000.00',
      delimiter: '.',
    },
    UK: {
      companyCode: 'COPARTUK',
      locale: 'en-GB',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'GBP',
      name: 'UK',
      placeHolder: '£00,000,000.00',
      delimiter: '.',
    },
    IR: {
      // need more clarity on the details for this country
      companyCode: 'COPARTUK',
      locale: 'en-GB',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'EUR',
      name: 'IR',
      placeHolder: '€00,000,000.00',
      delimiter: '.',
    },
    ME: {
      // need more clarity on the details for this country
      companyCode: 'COPARTUK',
      locale: 'en-GB',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'AED',
      name: 'MEA',
      placeHolder: 'AED00,000,000.00',
      delimiter: '.',
    },
    CA: {
      companyCode: 'COPART',
      locale: 'en-US',
      distanceUnit: 'km',
      region: 'America/Los_Angeles',
      format: 'MM/DD/YYYY',
      currency: 'CAD',
      name: 'CANADA',
      placeHolder: 'CAD00,000,000.00',
      delimiter: '.',
    },
    DE: {
      companyCode: 'COPART',
      locale: 'de-DE',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Berlin',
      currency: 'EUR',
      name: 'GERMANY',
      placeHolder: '00.000.000,00 €',
      delimiter: ',',
    },
    ES: {
      companyCode: 'COPART',
      locale: 'de-DE',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'EUR',
      name: 'SPAIN',
      placeHolder: '00.000.000,00 €',
      delimiter: ',',
    },
    IN: {
      companyCode: 'COPART',
      locale: 'en-IN',
      distanceUnit: 'km',
      region: 'Asia/Kolkata',
      format: 'MM/DD/YYYY',
      currency: 'INR',
      name: 'INDIA',
      placeHolder: '₹ 00,00,000.00',
      delimiter: '.',
    },
    GB: {
      companyCode: 'COPARTUK',
      locale: 'en-GB',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'GBP',
      name: 'GB',
      placeHolder: '£00,000,000.00',
      delimiter: '.',
    },
  }[country || countryCode])

export default companyCodeMapper
