import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import { wrapWithMaterialUIContext } from 'utils/wrapWithContext'

import HierarchySelector from '../HierarchySelector'

const nestedOptions = [
  {
    name: 'asia',
    label: 'Asia',
    options: [
      {
        name: 'india',
        label: 'India',
        options: [
          {
            name: 'telangana',
            label: 'Telangana',
          },
        ],
      },
      {
        name: 'china',
        label: 'China',
        options: [
          {
            name: 'beijing',
            label: 'Beijing',
          },
        ],
      },
    ],
  },
  {
    name: 'northAmerica',
    label: 'North America',
    options: [
      {
        name: 'usa',
        label: 'USA',
        options: [
          {
            name: 'texas',
            label: 'Texas',
          },
          {
            name: 'arkansas',
            label: 'Arkansas',
          },
        ],
      },
    ],
  },
  {
    name: 'africa',
    label: 'Africa',
    options: [
      {
        name: 'egypt',
        label: 'Egypt',
      },
      {
        name: 'libya',
        label: 'Libya',
      },
    ],
  },
]

describe('<HierarchySelector />', () => {
  test('should render nested options properly', () => {
    const tree = renderer.create(
      <HierarchySelector
        name="AutoSelect Field"
        options={nestedOptions}
        width={200}
        optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
      />,
    )
    expect(tree).toMatchSnapshot()
  })

  test('should filter options available based on entered text', () => {
    const tree = mount(
      <HierarchySelector
        name="AutoSelect Field"
        options={nestedOptions}
        width={200}
        optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
      />,
    )
    expect(tree.state('filteredOptions')).toEqual(tree.state('flattenedOptions'))
    tree.find('AutoSelect').prop('onChange')('Te')
    expect(tree.state('filteredOptions')).toMatchSnapshot()
  })

  test('should save selected value when value is selected from dropdown', () => {
    const tree = mount(
      <HierarchySelector
        name="AutoSelect Field"
        options={nestedOptions}
        width={200}
        optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
      />,
    )
    tree.find('AutoSelect').prop('onChange')('Te')
    tree.find('AutoSelect').prop('onChange')(tree.state('filteredOptions')[0])
    expect(tree.state('selectedValue')).toMatchSnapshot()
  })
})
