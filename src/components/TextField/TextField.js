import React from 'react'
import PropTypes from 'prop-types'
import { TextField as FabricTextField } from 'office-ui-fabric-react/lib/TextField';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

const propTypes = {
  text: PropTypes.string,
}

const TextField = (props) => (
  <Fabric>
    <FabricTextField {...props} />
  </Fabric>
)

export default TextField