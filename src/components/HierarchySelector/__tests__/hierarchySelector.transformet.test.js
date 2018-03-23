// @flow

import { flattenNestedOptions } from '../hierarchySelector.transformer'
import { renderMethod } from '../HierarchySelectorExample'

describe('Handle Transformation', () => {
  test('properly transform nested option', () => {
    const nestedOptions = [
      {
        name: 'company1',
        label: "Cecy's Towing Company",
        level: 0,
        expiresOn: '04/15/2018',
        options: [
          {
            name: 'group1',
            label: "Cecy's Group",
            level: 1,
            options: [
              {
                name: 'driver1',
                label: 'Manuel R Cero fgfg jhjh kjkj hjhj hjh jhjhj jh jh jhj j j hj jh jh j hj hj j jh jh jh j hj4',
                level: 2,
                isDispatchable: true,
                hasPcard: true,
              },
              {
                name: 'driver2',
                label: 'Driver 2',
                level: 2,
              },
              {
                name: 'driver2',
                label: 'Driver 3',
                level: 2,
                hasPcard: true,
              },
            ],
          },
          {
            name: 'group2',
            label: "Cecy's Group2",
            isDisabled: true,
            level: 1,
            options: [
              {
                name: 'driver1',
                label: 'Marc Jacobs',
                level: 2,
              },
            ],
          },
        ],
      },
      {
        name: 'company2',
        label: 'Haul O Way',
        expiresOn: '04/15/2018',
        level: 0,
        options: [
          {
            name: 'group1',
            label: "Haul O' Way",
            level: 1,
            options: [
              {
                name: 'driver1',
                label: 'Jason',
                level: 2,
              },
            ],
          },
          {
            name: 'group2',
            label: "Haul O' Way Group",
            level: 1,
            options: [
              {
                name: 'driver2',
                label: 'Anderson',
                level: 2,
                isDisabled: true,
              },
            ],
          },
        ],
      },
      {
        name: 'company3',
        label: 'ABC Company',
        expiresOn: '04/15/2018',
        level: 0,
        options: [
          {
            name: 'group1',
            label: 'ABC Group',
            level: 1,
            options: [
              {
                name: 'driver1',
                label: 'Jason',
                level: 2,
              },
            ],
          },
        ],
      },
      {
        name: 'company4',
        label: 'XYZ Company',
        expiresOn: '01/15/2018',
        level: 0,
        options: [
          {
            name: 'group1',
            label: 'XYZ Group',
            level: 1,
            options: [
              {
                name: 'driver1',
                label: 'Jason',
                level: 2,
              },
            ],
          },
        ],
      },
    ]
    expect(flattenNestedOptions(nestedOptions, renderMethod)).toMatchSnapshot()
  })
  test('handle empty options', () => {
    const nestedOption = [
      {
        name: 'company1',
        label: 'company1',
        options: [],
      },
    ]
    expect(flattenNestedOptions(nestedOption, renderMethod)).toMatchSnapshot()
  })
})
