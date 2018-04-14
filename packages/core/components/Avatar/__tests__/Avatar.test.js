import React from 'react'
import renderer from 'react-test-renderer'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import Avatar from '../Avatar'

describe('<Avatar />', () => {
  test('<Avatar /> should render properly', () => {
    const tree = renderer.create(wrapWithMaterialUIContext(<Avatar />))
    expect(tree).toMatchSnapshot()
  })

  test('<Avatar /> should render children', () => {
    const tree = renderer.create(
      wrapWithMaterialUIContext(
        <Avatar>
          <div className="avatarChild" />
        </Avatar>,
      ),
    )
    expect(tree).toMatchSnapshot()
  })
})
