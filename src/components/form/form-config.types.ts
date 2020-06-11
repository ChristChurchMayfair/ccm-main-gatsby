import { ValidationOptions } from "react-hook-form"
import { VisibilityCondition } from "./conditional-visibility"

export type CommonField = {
    name: string
    label: string
    contextualHelp?: string
    showWhen?: VisibilityCondition
    validation?: ValidationOptions
}

//TODO - the any types in here need setting properly
export type ReactHookFormWiring = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    watch?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control?: any
}
