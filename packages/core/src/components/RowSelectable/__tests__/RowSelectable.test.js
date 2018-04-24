// @flow

import React from 'react'
import renderer from 'react-test-renderer'

import {RowSelectable} from '../RowSelectable'

const getRowSelectableProps = () => ({})

describe.skip('<RowSelectable />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<RowSelectable {...getRowSelectableProps()} />)
    expect(tree).toMatchSnapshot()
  })
})
