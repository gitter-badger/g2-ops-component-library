import * as React from 'react'

import { flagUrl, imageClass } from './utilities'

type PropsT = {
  countryCode: string,
  type: string
}

export const Flag = (props: PropsT) => {
  return (
    <img
      alt="Flag"
      src={flagUrl(props.countryCode)}
      className={imageClass(props.type)}
    />
  )
}