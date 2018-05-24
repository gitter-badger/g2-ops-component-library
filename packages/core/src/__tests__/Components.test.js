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

test('has no default', () => {
	const hasDefaultValues = Object.values(library).reduce((final, value) => {
			if (final) return final
			value.default && (final = true)
			return final
	}, false)

	expect(hasDefaultValues).toEqual(false)
})