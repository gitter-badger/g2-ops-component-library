// import axios from 'axios'
// import uuid from 'uuid'
import { filter, isNil } from 'ramda'

import { SUBJECT_HEADER } from './consts';

// const getAccessToken = () => {
//   let accessToken = document.cookie
//     .split(';')
//     .map((c) => c.trim())
//     .find((c) => c.match(/^access_token/))

//   return accessToken && accessToken.split('=')[1]
// }

// const xhr = axios.create()


// const COUNTRY_CODE = 'US'

// const DEV_SESSION_SECRET = 'fsdfdhfjksfhfjk!@dsjfjkdshfkjdshkjfhdskjfhkjdshfkasjhfkjhkashkheu43895340918493mfhe49840143fwwdss#$'
// const DEV_SESSION_ID = 'SessionID'
// const DEV_AUTH_TOKEN = 'Basic b3BzcG9ydGFsOmQ1MmQ1MGMzMTMwODFiMzQzMmQyMzhiMTNkYjFmMTE2'
// const DEV_ME_SERVICE = 'http://c-auth-qa4.copart.com/employee/oauth/token'

// xhr.interceptors.request.use(
//   (xhrConf) => {
//     const accessToken = DEV_AUTH_TOKEN
//     const headers = xhrConf.headers
//     // solr check so that there is no authentication in solr queries
//     if (xhrConf.url.indexOf('/solr/') !== -1) {
//       xhrConf.url = `${xhrConf.url}&cl=${clientName}`
//       return xhrConf
//     }
//     if (
//       xhrConf.url.indexOf('referencedata-ws') !== -1 &&
//       xhrConf.url.indexOf('referencedata-ws/states') === -1 &&
//       xhrConf.url.indexOf('sprocs') === -1
//     ) {
//       headers.Version = '2.0'
//     }
//     if (accessToken && headers) {
//       headers.Authorization = `bearer ${accessToken}`
//       headers['Content-Type'] = 'application/json'
//       headers.countryCode = xhrConf.imageRequest ? 'US' : COUNTRY_CODE
//       headers.partnerCode = 'en'
//       headers.source = 'mobile'
//     }
//     headers.correlationID = `cas-uuid-${uuid()}`
//     return xhrConf
//   },
//   (error) => {
//     console.error(error) //eslint-disable-line
//     return Promise.reject(error)
//   }
// )

// export { xhr }


export const createSubjectText = (targetObject) => {
	return `${SUBJECT_HEADER} Feedback - Process: ${targetObject.process} - Issue Type: ${targetObject.issueType}`
}

// NOTE: Cloned from ops-portal repo.
export const generateFeedbackEmail = (props) => {
  const userAgent = navigator.userAgent
  const url = location.href
  return `
    ${props.feedback}
    <br/>
    <br/>
    <br/>
    ----
    <br/>
      Email: ${props.email}
    <br/>
      Url: ${props.url}
    <br/>
      Selected Yard: ${props.selectedYard}
    <br/>
      Home Yard: ${props.homeYard}
    <br/>
      User Agent: ${props.userAgent}
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

export const removeEmpty = (obj) => {
  const nonEmptyObj = {}
  for (const i in obj) {
    if (obj.hasOwnProperty(i) && obj[i] && !(obj[i] === 'A')) {
      nonEmptyObj[i] = obj[i]
    }
  }
  return nonEmptyObj
}

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