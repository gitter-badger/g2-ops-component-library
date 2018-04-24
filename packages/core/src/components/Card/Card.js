// @flow

import { wrapMuiContext } from 'utilities/wrapMuiContext'
import MuiCard, { CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

const Card = wrapMuiContext(MuiCard)
export { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText }
