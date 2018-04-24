import * as library from '../'

const { describe, test, it, expect } = global

test('has no undefined', () => {
    const undefinedValues = Object.values(library).reduce((final, value) => {
        if (final) return final
        !value && (final = true)
        return final
    }, false)

    expect(undefinedValues).toEqual(false)
})