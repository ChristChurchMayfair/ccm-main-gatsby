import { isFieldRequired } from "./form"
import { ValidationOptions } from "react-hook-form"

test("returns false when no requirement is set", () => {
    const inputValidationOptions: ValidationOptions = {}

    const result = isFieldRequired(inputValidationOptions)

    expect(result).toBe(false)
})

test("returns false when requirement is set explicitly to false", () => {
    const inputValidationOptions: ValidationOptions = { required: false }

    const result = isFieldRequired(inputValidationOptions)

    expect(result).toBe(false)
})

test("returns true when requirement is set explicitly to true", () => {
    const inputValidationOptions: ValidationOptions = { required: true }

    const result = isFieldRequired(inputValidationOptions)

    expect(result).toBe(true)
})

test("returns true when requirement is set to message string", () => {
    const inputValidationOptions: ValidationOptions = { required: "A message" }

    const result = isFieldRequired(inputValidationOptions)

    expect(result).toBe(true)
})
