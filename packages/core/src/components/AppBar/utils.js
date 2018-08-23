import { compose } from 'ramda'

const FIND_ALL_UNDERSCORES = /_+/g
const FIND_FIRST_LETTER_REGEX = /\w\S*/g

export const replaceUnderscoreWithSpace = (string) =>
  string && string.length > 0 && string.replace(FIND_ALL_UNDERSCORES, ' ')

export const capitalizeFirstLetter = (string) =>
  string &&
  string.replace(
    FIND_FIRST_LETTER_REGEX,
    (match) => match && `${match.charAt(0).toUpperCase()}${match.substr(1).toLowerCase()}`
  )

export const beautifyRoleText = compose(capitalizeFirstLetter, replaceUnderscoreWithSpace)