import React from 'react'
import { initializeIcons } from '@uifabric/icons'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

initializeIcons();

// a higher order function that provides mui context to the Component being passed.
export const wrapFabricContext = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <Fabric>
          <Component {...this.props} />
        </Fabric>
      )
    }
  }
}