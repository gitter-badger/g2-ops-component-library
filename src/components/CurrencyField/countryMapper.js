const countryCode = 'DE'

export const currencyDisplayMap = currency =>
  ({
    USD: 'symbol',
    CAD: 'code',
    GBP: 'symbol',
    EUR: 'symbol',
    AED: 'symbol',
    OMR: 'symbol',
    BHD: 'symbol',
  }[currency])

const companyCodeMapper = country =>
  ({
    US: {
      companyCode: 'COPART',
      locale: 'en-US',
      distanceUnit: 'mi',
      format: 'MM/DD/YYYY',
      region: 'America/Los_Angeles',
      currency: 'USD',
      name: 'USA',
    },
    UK: {
      companyCode: 'COPARTUK',
      locale: 'en-GB',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'GBP',
      name: 'UK',
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
    },
    CA: {
      companyCode: 'COPART',
      locale: 'en-US',
      distanceUnit: 'km',
      region: 'America/Los_Angeles',
      format: 'MM/DD/YYYY',
      currency: 'CAD',
      name: 'CANADA',
    },
    DE: {
      companyCode: 'COPART',
      locale: 'de-DE',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Berlin',
      currency: 'EUR',
      name: 'GERMANY',
    },
    ES: {
      companyCode: 'COPART',
      locale: 'de-DE',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'EUR',
      name: 'SPAIN',
    },
    IN: {
      companyCode: 'COPART',
      locale: 'en-IN',
      distanceUnit: 'km',
      region: 'Asia/Kolkata',
      format: 'MM/DD/YYYY',
      currency: 'INR',
      name: 'INDIA',
    },
    GB: {
      companyCode: 'COPARTUK',
      locale: 'en-GB',
      distanceUnit: 'km',
      format: 'DD/MM/YYYY',
      region: 'Europe/Belfast',
      currency: 'GBP',
      name: 'GB',
    },
  }[country || countryCode])

export default companyCodeMapper
