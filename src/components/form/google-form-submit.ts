import queryString from "query-string"
import { format } from "date-fns"
import { ReactElement } from "react"

export interface IndexableFormData {
    [key: string]: string | number | Date | boolean | null
}

type OtherFieldConfig = {
    otherValue: string
    otherField: string
}

export type GoogleFormConfig = {
    formId: string
    fieldNameToEntryId: { [fieldName: string]: number }
    otherEnabledFields: { [fieldName: string]: OtherFieldConfig }
    warning: ReactElement | null,
    genericSubmissionError: string
}

export function convertFormDateToGoogleFormUrl<
    FormData extends IndexableFormData
>(formData: FormData, config: GoogleFormConfig): string {
    const googleFormsDateFormat = "yyyy-MM-dd"

    const options: { [key: string]: string | null } = {}

    // List the special "other" fields so that we can filter
    // them out so that we don't naturally try to process them
    const otherFields = Object.keys(config.otherEnabledFields).map(k => {
        return config.otherEnabledFields[k].otherField
    })

    for (const fieldName of Object.getOwnPropertyNames(formData).filter(
        fieldName => !otherFields.includes(fieldName)
    )) {
        //console.log(fieldName)
        let value = formData[fieldName]
        const param = "entry." + config.fieldNameToEntryId[fieldName].toString()

        if (config.otherEnabledFields[fieldName] !== undefined) {
            const otherConfig = config.otherEnabledFields[fieldName]
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
        //console.log(stringValue)
        options[param] = stringValue
    }

    options["submit"] = "SUBMIT"

    const baseUrl = "https://docs.google.com/forms/d/e/"
    const url = queryString.stringifyUrl(
        { url: baseUrl + config.formId + "/formResponse", query: options },
        { skipNull: true }
    )

    return url
}
