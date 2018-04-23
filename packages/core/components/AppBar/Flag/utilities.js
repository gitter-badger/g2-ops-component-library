import { COUNTRY_CODES, FLAG_URL_PREFIX, HEIGHT_22PX, HEIGHT_30PX } from './consts'

const code = (countryCode: string): string => {
    return COUNTRY_CODES[countryCode] || countryCode
}
  
export const flagUrl = (countryCode: string): string => {
    return `${FLAG_URL_PREFIX}${code(countryCode)}.png`
}

export const imageClass = (type: string) => {
    return type === 'cas'
        ? HEIGHT_22PX
        : HEIGHT_30PX;
}