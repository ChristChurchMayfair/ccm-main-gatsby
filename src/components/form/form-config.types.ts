import { ValidationOptions } from "react-hook-form"
import { ReactElement } from "react"

export type CommonFormWiring = {
    register?: any
    errors?: any
    watch?: any
    control?: any
}

export type ValueEqual = {
    type: "valueEqualTo"
    otherFieldName: string
    hasValueEqualTo: any
}

export type ValueIn = {
    type: "valueInList"
    otherFieldName: string
    values: any[]
}

export type VisibilityCondition = ValueEqual | ValueIn | undefined

export type CommonField = {
    name: string
    label: string
    contextualHelp?: string
    showWhen?: VisibilityCondition
    validation?: ValidationOptions
}

export type BasicText = CommonField & {
    // type: "basic"
    placeholder?: string
    autoComplete?: string
}

export type RadioOption = {
    id: string
    name: string
}

export type Radio = CommonField & {
    //type: "radio"
    options: RadioOption[]
}

export type CheckBoxOption = {
    label: string
    id: string
    defaultValue: boolean
    showWhen?: VisibilityCondition
}

export type Checkboxes = CommonField & {
    type: "checkboxes"
    options: CheckBoxOption[]
}

export type DropDownChoice = {
    id: string
    label: string
}

export type DropDown = CommonField & {
    //type: "dropdown"
    choices: DropDownChoice[]
    allowOther?: boolean
    otherOptionLabel?: string
    otherInputIdSuffix?: string
    otherInputLabel?: string
}

export type DateFieldConfig = CommonField & {
    //type: "date"
    placeholder?: string
}

export type SectionStart = {
    //type: "section"
    name: string
    description?: string
    level: 1 | 2
    italics?: boolean
}

export type FillableField = BasicText | Radio | Checkboxes | DropDown | DateFieldConfig
export const fillableFieldTypes = ["basic", "dropdown", "date", "checkboxes", "radio"]

export type FormField = FillableField | SectionStart
