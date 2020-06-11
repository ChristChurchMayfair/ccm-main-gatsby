import queryString from "query-string"
import { format } from "date-fns"
import { ReactElement } from "react"

export type IndexableFormData = Record<
    string,
    string | number | Date | boolean | null
>

type OtherFieldConfig = {
    otherValue: string
    otherField: string
}

export type GoogleFormConfig = {
    formId: string
    fieldNameToEntryId: { [fieldName: string]: number }
    otherEnabledFields: { [fieldName: string]: OtherFieldConfig }
    warning: ReactElement | null
    genericSubmissionError: string
}

export function convertFormDateToGoogleFormUrl<
    FormData extends IndexableFormData
>(formData: FormData, config: GoogleFormConfig): string {
    const googleFormsDateFormat = "yyyy-MM-dd"

    // List the special "other" fields so that we can filter
    // them out so that we don't naturally try to process them
    const otherFields = Object.keys(config.otherEnabledFields).map(k => {
        return config.otherEnabledFields[k].otherField
    })

    const options = Object.getOwnPropertyNames(formData)
        .filter(fieldName => !otherFields.includes(fieldName))
        .reduce((acc, fieldName) => {
            let value = formData[fieldName]
            const param =
                "entry." + config.fieldNameToEntryId[fieldName].toString()

            // If this field is configured to allow someone to select "Other"
            if (config.otherEnabledFields[fieldName] !== undefined) {
                const otherConfig = config.otherEnabledFields[fieldName]
                // Check to see if the user has selected "Other" and swizzle the value in
                if (value === otherConfig.otherValue) {
                    value = formData[otherConfig.otherField]
                }
            }
            let stringValue: string | null = null
            if (typeof value === "string") {
                stringValue = value
            } else if (typeof value === "number") {
                stringValue = value.toString()
            } else if (typeof value === "boolean") {
                stringValue = value.toString()
            } else if (value instanceof Date) {
                stringValue = format(value, googleFormsDateFormat)
            }
            return { ...acc, [param]: stringValue }
        }, {} as Record<string, string | null>)

    options["submit"] = "SUBMIT"

    const baseUrl = "https://docs.google.com/forms/d/e/"
    const url = queryString.stringifyUrl(
        { url: baseUrl + config.formId + "/formResponse", query: options },
        { skipNull: true }
    )

    return url
}
