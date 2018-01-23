import React from 'react'
import MuiDivider from 'material-ui/Divider'
import { wrapMuiContext } from '../../wrapMuiContext'

const Divider = (props) => (
  <MuiDivider {...props} />
)

export default wrapMuiContext(Divider)
