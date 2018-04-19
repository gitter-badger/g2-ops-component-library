import React from 'react'
import renderer from 'react-test-renderer'

import {SnackBar} from '../'

const message = 'Snackbar Message'

describe('<SnackBar />', () => {
  test('should render properly', () => {
    const tree = renderer.create(<SnackBar message={message} />)
    expect(tree).toMatchSnapshot()
  })

  test('should render properly when showSnackBar=true', () => {
    const tree = renderer.create(<SnackBar message={message} showSnackBar />)
    expect(tree).toMatchSnapshot()
  })

  test('should render properly when showOKButton=true', () => {
    const tree = renderer.create(<SnackBar message={message} showOKButton />)
    expect(tree).toMatchSnapshot()
  })
})
