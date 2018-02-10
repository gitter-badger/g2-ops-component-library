// @flow

import type { ChildrenArray, Node } from 'react'

import React from 'react'
import { Card as MuiCard, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'

import { wrapMuiContext } from '../../wrapMuiContext'

const Card = <T: { children?: ChildrenArray<Node> }>(props: T) => <MuiCard {...props}>{props.children}</MuiCard>

export default wrapMuiContext(Card)
export { CardActions, CardHeader, CardMedia, CardTitle, CardText }
