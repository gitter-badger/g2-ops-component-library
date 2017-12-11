import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

const propTypes = {
  text: PropTypes.string,
}

const TextField = (props) => (
  <TextField {...props} />
)