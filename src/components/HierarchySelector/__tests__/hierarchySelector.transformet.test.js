// @flow

import { flattenNestedOptions } from '../hierarchySelector.transformer.js'

describe('Handle Transformation', () => {
  test('properly transform nested option', () => {
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
    expect(flattenNestedOptions(nestedOptions)).toMatchSnapshot()
  })
  test('handle empty options', () => {
    const nestedOption = [
      {
        name: 'asia',
        label: 'Asia',
        options: [],
      },
    ]
    expect(flattenNestedOptions(nestedOption)).toMatchSnapshot()
  })
})
