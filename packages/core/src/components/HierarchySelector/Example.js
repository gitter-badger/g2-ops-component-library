import React from 'react'
import { FlattenedOptionType } from 'types/HierarchySelector'

import { HierarchySelector } from './HierarchySelector'

export const nestedOptions = [
  {
    id: 'asia',
    label: 'Asia',
    level: 'continent',
    options: [
      {
        id: 'india',
        label: 'India',
        level: 'country',
        options: [
          {
            id: 'telangana',
            label: 'Telangana',
            level: 'state',
          },
        ],
      },
      {
        id: 'china',
        label: 'China',
        level: 'country',
        options: [
          {
            id: 'beijing',
            label: 'Beijing',
            level: 'state',
          },
        ],
      },
    ],
  },
  {
    id: 'northAmerica',
    label: 'North America',
    level: 'continent',
    options: [
      {
        id: 'usa',
        label: 'USA',
        level: 'country',
        options: [
          {
            id: 'texas',
            label: 'Texas',
            level: 'state',
          },
          {
            id: 'arkansas',
            label: 'Arkansas',
            level: 'state',
          },
        ],
      },
    ],
  },
  {
    id: 'africa',
    label: 'Africa',
    level: 'continent',
    options: [
      {
        id: 'egypt',
        label: 'Egypt',
        level: 'country',
      },
      {
        id: 'libya',
        label: 'Libya',
        level: 'country',
      },
    ],
  },
]

export const renderMethod = (option) => (
  <div className="hierarchyOption">
    <span>{option.label}</span>
  </div>
)

const initialValue = {
  continent: 'northAmerica',
  country: 'usa',
  state: 'texas'
}

class Example extends React.Component {
  state = {
    value: initialValue,
  }
  onChange = (selectedOption: FlattenedOptionType) => {
    const selectedHierarchyOption = (typeof selectedOption === 'string')? selectedOption : selectedOption.hierarchy
    this.setState({ value: selectedHierarchyOption })
  }
  render () {
    return (
      <div style={{ maxWidth: '400px' }}>
        <HierarchySelector
          name="Simple Hierarchy Example"
          label="Simple Hierarchy Example"
          options={nestedOptions}
          width={200}
          serializeOption={(o) => o.hierarchy}
          optionStyleProps={{ rowHeight: 40, optionsMinHeight: 200, fontSize: '12px' }}
          value={this.state.value}
          renderMethod={renderMethod}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

export default Example
