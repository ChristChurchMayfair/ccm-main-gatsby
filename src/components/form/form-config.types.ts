import { ValidationOptions } from "react-hook-form"
import { VisibilityCondition } from "./conditional-visibility"

export type CommonField = {
    name: string
    label: string
    contextualHelp?: string
    showWhen?: VisibilityCondition
    validation?: ValidationOptions
}

export type ReactHookFormWiring = {
    register?: any
    errors?: any
    watch?: any
    control?: any
}