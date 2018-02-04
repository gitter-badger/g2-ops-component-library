// @flow

import React from 'react'
import MuiDivider from 'material-ui/Divider'

import { wrapMuiContext } from '../../wrapMuiContext'

const Divider = <T>(props: T) => <MuiDivider {...props} />

export default wrapMuiContext(Divider)
