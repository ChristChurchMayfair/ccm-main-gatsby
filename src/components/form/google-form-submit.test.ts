import {
    convertFormDateToGoogleFormUrl,
    GoogleFormConfig,
} from "./google-form-submit"
import { parseISO } from "date-fns"

test("generates the correct url with string values", () => {
    const formData = {
        foo: "bar",
    }

    const config: GoogleFormConfig = {
        formId: "formId",
        fieldNameToEntryId: {
            foo: 123,
        },
        otherEnabledFields: {},
        warning: null,
    }

    const url = convertFormDateToGoogleFormUrl(formData, config)
    expect(url).toBe(
        "https://docs.google.com/forms/d/e/formId/formResponse?entry.123=bar&submit=SUBMIT"
    )
})

test("generates the correct url with number values", () => {
    const formData = {
        foo: 123.45,
    }

    const config: GoogleFormConfig = {
        formId: "formId",
        fieldNameToEntryId: {
            foo: 123,
        },
        otherEnabledFields: {},
        warning: null,
    }

    const url = convertFormDateToGoogleFormUrl(formData, config)
    expect(url).toBe(
        "https://docs.google.com/forms/d/e/formId/formResponse?entry.123=123.45&submit=SUBMIT"
    )
})

test("generates the correct url with date values", () => {
    const formData = {
        date: parseISO("2016-12-01"),
    }

    const config: GoogleFormConfig = {
        formId: "formId",
        fieldNameToEntryId: {
            date: 123,
        },
        otherEnabledFields: {},
        warning: null,
    }

    const url = convertFormDateToGoogleFormUrl(formData, config)
    expect(url).toBe(
        "https://docs.google.com/forms/d/e/formId/formResponse?entry.123=2016-12-01&submit=SUBMIT"
    )
})

test("generates the correct url with boolean values", () => {
    const formData = {
        boolean: true,
    }

    const config: GoogleFormConfig = {
        formId: "formId",
        fieldNameToEntryId: {
            boolean: 123,
        },
        otherEnabledFields: {},
        warning: null,
    }

    const url = convertFormDateToGoogleFormUrl(formData, config)
    expect(url).toBe(
        "https://docs.google.com/forms/d/e/formId/formResponse?entry.123=true&submit=SUBMIT"
    )
})

test("generates the correct url with string values, omitting nulls", () => {
    const formData = {
        foo: "bar",
        baz: null,
    }

    const config: GoogleFormConfig = {
        formId: "formId",
        fieldNameToEntryId: {
            foo: 123,
            baz: 456,
        },
        otherEnabledFields: {},
        warning: null,
    }

    const url = convertFormDateToGoogleFormUrl(formData, config)
    expect(url).toBe(
        "https://docs.google.com/forms/d/e/formId/formResponse?entry.123=bar&submit=SUBMIT"
    )
})

test("generates the correct url for data where other field is configured", () => {
    const formData = {
        foo: "Other",
        fooOther: "Custom",
    }

    const config: GoogleFormConfig = {
        formId: "formId",
        fieldNameToEntryId: {
            foo: 123,
            fooOther: 123,
        },
        otherEnabledFields: {
            foo: {
                otherValue: "Other",
                otherField: "fooOther",
            },
        },
        warning: null,
    }

    const url = convertFormDateToGoogleFormUrl(formData, config)
    expect(url).toBe(
        "https://docs.google.com/forms/d/e/formId/formResponse?entry.123=Custom&submit=SUBMIT"
    )
})

test("generates the correct url for data where other field is configured but not triggered", () => {
    const formData = {
        foo: "Normal",
        fooOther: "this should never be processed!",
    }

    const config: GoogleFormConfig = {
        formId: "formId",
        fieldNameToEntryId: {
            foo: 123,
        },
        otherEnabledFields: {
            foo: {
                otherValue: "Other",
                otherField: "fooOther",
            },
        },
        warning: null,
    }

    const url = convertFormDateToGoogleFormUrl(formData, config)
    expect(url).toBe(
        "https://docs.google.com/forms/d/e/formId/formResponse?entry.123=Normal&submit=SUBMIT"
    )
})
