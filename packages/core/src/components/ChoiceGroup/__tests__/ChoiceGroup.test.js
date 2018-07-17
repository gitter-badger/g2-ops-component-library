import React from 'react'
import renderer from 'react-test-renderer'

import { ChoiceGroup } from '../ChoiceGroup'

describe('<ChoiceGroup />', () => {
  test('should render properly', () => {
    const tree = renderer.create(
      <ChoiceGroup
        defaultSelectedKey="B"
        options={[
          {
              key: 'A',
              text: 'Option A',
          },
          {
              key: 'B',
              text: 'Option B'
          },
          {
              key: 'C',
              text: 'Option C',
              disabled: true
          },
          {
              key: 'D',
              text: 'Option D',
              disabled: true
          }
        ]}
        onChange={(event, option) => console.log(option)}
        label="Pick one"
        required
      />
    )
    expect(tree).toMatchSnapshot()
  })
})