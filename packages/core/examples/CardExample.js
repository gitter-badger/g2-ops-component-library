import React from 'react'
import { Card, CardActions, CardHeader, CardText } from 'components/Card/Card'
import FlatButton from 'material-ui/FlatButton'

const CardExampleExpandable = () => (
  <Card>
    <CardHeader title="Card Example" subtitle="Subtitle" actAsExpander showExpandableButton />
    <CardText expandable>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla
      facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris,
      mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Save" />
      <FlatButton label="Cancel" />
    </CardActions>
  </Card>
)

export default CardExampleExpandable
