import { ReactHookFormWiring, CommonField } from "../form-config.types"
import { prependRequired } from "../form"
import Field from "../field"
import React from "react"
import * as formStyles from "../form.module.scss"
import { shouldShowField } from "../conditional-visibility"

type DropDownChoice = {
    id: string
    label: string
}

type DropDown = {
    choices: DropDownChoice[]
    allowOther?: boolean
    otherOptionLabel?: string
    otherInputIdSuffix?: string
    otherInputLabel?: string
}

type DropDownFieldProps = DropDown & CommonField & ReactHookFormWiring

const DropDownField: React.FC<DropDownFieldProps> = ({
    name,
    label,
    choices: choices,
    allowOther,
    otherOptionLabel,
    otherInputIdSuffix,
    contextualHelp,
    otherInputLabel,
    showWhen,
    validation,
    register,
    errors,
    watch,
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    const OtherOptionIdAndValue = "other"
    let optionsToRender: DropDownChoice[] = []
    optionsToRender = optionsToRender.concat(choices)

    if (allowOther === true) {
        optionsToRender.push({
            id: OtherOptionIdAndValue,
            label: otherOptionLabel ?? "Other",
        })
    }

    const options = optionsToRender.map(option => {
        return (
            <option key={option.id} value={option.id}>
                {option.label}
            </option>
        )
    })

    const showOtherInput =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        allowOther === true && watch(name) === OtherOptionIdAndValue

    const otherInputIdAndName = name + (otherInputIdSuffix ?? "Other")

    const otherInput = showOtherInput ? (
        <Field
            labelText={otherInputLabel}
            labelFor={otherInputIdAndName}
            contextualHelp="Required."
            error={errors[otherInputIdAndName]?.message}
        >
            <input
                type="text"
                className={formStyles.formItemInput}
                placeholder={otherInputLabel}
                name={otherInputIdAndName}
                id={otherInputIdAndName}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                ref={register({
                    required:
                        "When 'Other' is selected you must enter your own value",
                })}
            />
        </Field>
    ) : (
        <></>
    )

    return (
        <>
            <Field
                labelText={label}
                contextualHelp={prependRequired(validation, contextualHelp)}
                error={errors[name]?.message}
            >
                <select
                    className={formStyles.formItemInput}
                    name={name}
                    id={name}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    ref={register(validation)}
                >
                    {options}
                </select>
            </Field>
            {otherInput}
        </>
    )
}

export default DropDownField
