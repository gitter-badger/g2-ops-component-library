// @flow

import moment from 'moment'

type validateReturnValue = {
  displayDate: string,
  date: Date | null,
  errorMessage: string,
}
export const US_DATE_FORMAT = 'MM/DD/YYYY'

export function isValidDateRegex(value: string, defaultFormat: string): Array<any> {
  return value.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/) || []
}

export function isSameOrBeforeMaxDate(date: string, maxDate: Date, defaultFormat: string): string {
  const maxDateValue: string = moment(maxDate).format('MM/DD/YYYY')
  const errorValue: string = moment(maxDate).format(defaultFormat)
  return new Date(date).getTime() <= new Date(maxDateValue).getTime() ? '' : `Date cannot be after ${errorValue}`
}

export function isSameOrAfterMinDate(date: string, minDate: Date, defaultFormat: string): string {
  const minDateValue: string = moment(minDate).format('MM/DD/YYYY')
  const errorValue: string = moment(minDate).format(defaultFormat)
  return new Date(date).getTime() >= new Date(minDateValue).getTime() ? '' : `Date cannot be before ${errorValue}`
}

export function getDateObject(date: string, defaultFormat: string): Date {
  return moment
    .utc(date, defaultFormat)
    .startOf('day')
    .add(12, 'h')
    .toDate()
}

export function getDefaultMinDate(): Date {
  return moment()
    .subtract(100, 'y')
    .startOf('day')
    .toDate()
}

export function getDefaultMaxDate(): Date {
  return moment()
    .add(100, 'y')
    .endOf('day')
    .toDate()
}

export function validateDateAndGetErrorMesssage(
  value: string,
  minDate: Date,
  maxDate: Date,
  formatDate: (string | Date) => string,
  defaultFormat: string,
): validateReturnValue {
  let errorMessage = ''
  let date = null
  let displayDate = value
    .replace(/^(\d\d)(\d)$/g, '$1/$2')
    .replace(/^(\d\d\/\d\d)(\d+)$/g, '$1/$2')
    .replace(/[^\d\/]/g, '')

  const matchedDate: Array<any> = isValidDateRegex(displayDate, defaultFormat)
  if (matchedDate.length > 0) {
    const isValidMomentDate: boolean = moment(value, defaultFormat).isValid()
    if (isValidMomentDate) {
      displayDate = formatDate(displayDate)
      date = getDateObject(displayDate, defaultFormat)
      const formatDateForValidation: string = moment(displayDate, defaultFormat).format('MM/DD/YYYY')
      errorMessage = isSameOrAfterMinDate(formatDateForValidation, minDate, defaultFormat)
      if (errorMessage === '') {
        errorMessage = isSameOrBeforeMaxDate(formatDateForValidation, maxDate, defaultFormat)
      }
    } else {
      errorMessage = 'Invalid date entered'
    }
  }
  return { displayDate, date, errorMessage }
}

export function formatDate(date: string, currentFormat: string, format: string = US_DATE_FORMAT): string {
  return moment(date, currentFormat).format(format)
}

export const daysElapsedUntilToday = (givenDate: string, defaultFormat: string = US_DATE_FORMAT) => {
  // get number of days between given date and today's date
  const givenDateTime = moment.utc(givenDate, defaultFormat)
  const todayDateTime = moment.utc()
  return todayDateTime.diff(givenDateTime, 'days') + 1
}
