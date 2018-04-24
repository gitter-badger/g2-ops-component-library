// @flow
import type { ComponentType, Node } from 'react'

import React from 'react'
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'

// a higher order function that provides mui context to the Component being passed.
export function wrapFabricContext<T>(WrapperComponent: ComponentType<T>): (T) => Node {
  return (props: T) => (
    <Fabric>
      <WrapperComponent {...props} />
    </Fabric>
  )
}