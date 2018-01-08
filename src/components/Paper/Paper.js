import React from 'react'
import MuiPaper from 'material-ui/Paper'
import { wrapMuiContext } from '../../wrapMuiContext'

const PaperComponent = (props) => (
  <MuiPaper {...props}>
    {props.children}
  </MuiPaper>
)

export default wrapMuiContext(PaperComponent)