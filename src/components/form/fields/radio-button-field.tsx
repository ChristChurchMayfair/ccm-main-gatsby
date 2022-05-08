import { ReactHookFormWiring, CommonField } from "../form-config.types"
import Field from "../field"
import React from "react"
import classNames from "classnames"
import formStyles from "../form.module.scss"
import { prependRequired } from "../form"
import { shouldShowField } from "../conditional-visibility"

type RadioOption = {
    id: string
    name: string
    checked?: boolean
}

type Radio = {
    options: RadioOption[]
    allowOther?: boolean
    otherOptionName?: string
    otherInputIdSuffix?: string
    otherInputLabel?: string
}

type RadioButtonFieldProps = Radio & CommonField & ReactHookFormWiring

const RadioButtonField: React.FC<RadioButtonFieldProps> = ({
    name,
    label,
    contextualHelp,
    options,
    register,
    errors,
    watch,
    showWhen,
    validation,
    allowOther,
    otherOptionName,
    otherInputIdSuffix,
    otherInputLabel,
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    const OtherOptionIdAndValue = "other" + name
    let optionsToRender: RadioOption[] = []
    optionsToRender = optionsToRender.concat(options)

    if (allowOther === true) {
        optionsToRender.push({
            id: OtherOptionIdAndValue,
            name: otherOptionName ?? "Other",
        })
    }

    const inputDivs = optionsToRender.map(option => {
        return (
            <div key={option.id}>
                <input
                    type="radio"
                    id={option.id}
                    value={option.name}
                    name={name}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    ref={register(validation)}
                    defaultChecked={option.checked ?? false}
                />
                <label
                    htmlFor={option.id}
                    className={classNames(
                        formStyles.detailLabel,
                        formStyles.selectableButton
                    )}
                >
                    {option.name}
                </label>
            </div>
        )
    })

    const showOtherInput =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        allowOther === true && watch(name) === otherOptionName

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
                key={name}
                labelText={label}
                contextualHelp={prependRequired(validation, contextualHelp)}
                error={errors[name]?.message}
            >
                <div className={formStyles.formItemMultipleChoiceChoices}>
                    {inputDivs}
                </div>
            </Field>
            {otherInput}
        </>
    )
}

export default RadioButtonField
