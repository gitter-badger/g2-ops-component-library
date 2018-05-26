import { filter, isNil } from 'ramda'

import { SUBJECT_HEADER } from './consts';

export const createSubjectText = (target) => {
	return `${SUBJECT_HEADER} Feedback - Process: ${target.process} - Issue Type: ${target.issueType}`
}

// NOTE: Cloned from ops-portal repo.
export const generateFeedbackEmail = (props) => {
  return `
    Feedback: ${props.feedback}
    <br/>
    Email: ${props.email}
    <br/>
    Url: ${location.href}
    <br/>
    Selected Yard: ${props.selectedYard}
    <br/>
    Home Yard: ${props.homeYard}
    <br/>
    User Agent: ${navigator.userAgent}
  `
}

// NOTE: Cloned from ops-portal repo.
export const copyToClipboard = (text) => {
  const textField = document.createElement('textarea')
  textField.innerText = text
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
}

// TODO: Clean up.
export const toObject = (form) => {
  if (!form || form.nodeName !== 'FORM') {
    return {}
  }
  const obj = {}
  let j = 0
  for (let i = form.elements.length - 1; i >= 0; i--) {
    if (form.elements[i].name === '') {
      continue
    }
    switch (form.elements[i].nodeName) {
      case 'INPUT':
        switch (form.elements[i].type) {
          case 'text':
          case 'email':
          case 'hidden':
          case 'password':
          case 'button':
          case 'reset':
          case 'submit':
            obj[form.elements[i].name] = form.elements[i].value
            break
          case 'checkbox':
          case 'radio':
            if (form.elements[i].checked) {
              obj[form.elements[i].name] = form.elements[i].value
            }
            break
          default:
            break
        }
        break
      case 'TEXTAREA':
        obj[form.elements[i].name] = form.elements[i].value
        break
      case 'SELECT':
        switch (form.elements[i].type) {
          case 'select-one':
            obj[form.elements[i].name] = form.elements[i].value
            break
          case 'select-multiple':
            for (j = form.elements[i].options.length - 1; j >= 0; j -= 1) {
              if (form.elements[i].options[j].selected) {
                obj[form.elements[i].name] = form.elements[i].options[j].value
              }
            }
            break
          default:
            break
        }
        break
      case 'BUTTON':
        switch (form.elements[i].type) {
          case 'reset':
          case 'submit':
          case 'button':
            obj[form.elements[i].name] = form.elements[i].value
            break
          default:
            break
        }
        break
      default:
        break
    }
  }
  return obj
}

// TODO: Clean up.
export const objectToQuery = (obj) => {
  const parts = []
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (Array.isArray(obj[i])) {
        [...new Set(obj[i])].map((val) => parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(val)}`))
      } else {
        parts.push(`${encodeURIComponent(i)}=${encodeURIComponent(obj[i])}`)
      }
    }
  }
  return parts.join('&')
}

export const serialize = (form) => {
  const obj = toObject(form)
  return objectToQuery(obj)
}

const isClean = (x) => !(isNil(x) || x === '')
export const cleanData = (data) => filter(isClean, data)

// TODO: Clean up.
export const removeEmpty = (obj) => {
  const nonEmptyObj = {}
  for (const i in obj) {
    if (obj.hasOwnProperty(i) && obj[i] && !(obj[i] === 'A')) {
      nonEmptyObj[i] = obj[i]
    }
  }
  return nonEmptyObj
}

// TODO: Clean up.
export const dotToObj = (obj) => {
  const newObj = {}
  for (const k in obj) {
    if (obj.hasOwnProperty(k)) {
      const parts = k.split('.')
      const parentKey = parts.shift()
      newObj[parentKey] = parts.reverse().reduce((o, i) => {
        const res = {}
        res[i] = o
        return res
      }, obj[k])
    }
  }
  return newObj
}