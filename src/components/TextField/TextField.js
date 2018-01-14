import React from 'react'
import PropTypes from 'prop-types'
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import { wrapFabricContext } from '../../wrapFabricContext'

const propTypes = {
  text: PropTypes.string
}

const TextField = (props) => (
  <FabricTextField
    {...props}
  />
)

export default wrapFabricContext(TextField)
