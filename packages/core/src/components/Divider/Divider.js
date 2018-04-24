// @flow

import React from 'react'
import MuiDivider from 'material-ui/Divider'

import { wrapMuiContext } from 'utilities/wrapMuiContext'

const Divider = <T>(props: T) => <MuiDivider {...props} />

export default wrapMuiContext(Divider)
