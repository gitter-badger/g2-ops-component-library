import * as library from '../'

const { describe, test, it, expect } = global

test('has no undefined', () => {
    const hasUndefinedValues = Object.values(library).reduce((final, value) => {
        if (final) return final
        !value && (final = true)
        return final
    }, false)

    expect(hasUndefinedValues).toEqual(false)
})