import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import renderIf from 'render-if'

import { wrapWithMaterialUIContext } from 'utilities/wrapWithContext'

import { HierarchySelector } from '../HierarchySelector'
import { nestedOptions, renderMethod } from '../Example'

const initialValue = {
  continent: 'northAmerica',
  country: 'usa',
  state: 'texas'
}

describe('<HierarchySelector />', () => {
  test('should render nested options properly', () => {
    const tree = renderer.create(
      <HierarchySelector
        name="AutoSelect Field"
        options={nestedOptions}
        width={200}
        optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
        serializeOption={(o) => o.hierarchy}
        value={initialValue}
        renderMethod={renderMethod}
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
        value={initialValue}
        serializeOption={(o) => o.hierarchy}
        renderMethod={renderMethod}
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
        value={initialValue}
        serializeOption={(o) => o.hierarchy}
        renderMethod={renderMethod}
      />,
    )
    tree.find('AutoSelect').prop('onChange')('Te')
    tree.find('AutoSelect').prop('onChange')(tree.state('filteredOptions')[0])
    expect(tree.state('selectedValue')).toMatchSnapshot()
  })

  test('should select the correct hierarchy on selecting the option', () => {
    const selectedOption = {
      id: 'waterloo',
      label: 'Waterloo',
      level: 'state',
      hierarchy: {
        continent: 'europe',
        country: 'belgium',
        state: 'waterloo'
      },
      path: ['Europe', 'Belgium', 'Waterloo'],
    }
    const tree = mount(
      <HierarchySelector
        name="AutoSelect Field"
        options={nestedOptions}
        width={200}
        optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200 }}
        value={initialValue}
        serializeOption={(o) => o.hierarchy}
        renderMethod={renderMethod}
      />,
    )
    tree.find('AutoSelect').prop('onChange')(selectedOption)
    expect(tree.state('selectedValue')).toBe('Europe - Belgium - Waterloo')
  })
})
