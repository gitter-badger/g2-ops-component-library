import React from 'react'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

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