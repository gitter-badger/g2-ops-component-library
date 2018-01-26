import React from 'react'
import { Card as MuiCard, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import { wrapMuiContext } from '../../wrapMuiContext'

const Card = (props) => (
  <MuiCard {...props}>
    {props.children}
  </MuiCard>
)

export default wrapMuiContext(Card)
export { CardActions, CardHeader, CardMedia, CardTitle, CardText }
