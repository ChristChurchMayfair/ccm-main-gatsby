import { ReactHookFormWiring, CommonField } from "../form-config.types"
import Field from "../field"
import React from "react"
import classNames from "classnames"
import formStyles from "../form.module.scss"
import { prependRequired } from "../form"
import { shouldShowField, VisibilityCondition } from "../conditional-visibility"

export type CheckBoxOption = {
    label: string
    id: string
    defaultValue: boolean
    showWhen?: VisibilityCondition
}

type CheckBoxFieldProps = CommonField &
    ReactHookFormWiring & {
        options: CheckBoxOption[]
        itemsPerLine?: number
        allowOther?: boolean
        otherOptionName?: string
        otherInputIdSuffix?: string
        otherInputLabel?: string
    }

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
    name,
    label,
    options,
    validation,
    contextualHelp,
    errors,
    register,
    watch,
    showWhen,
    itemsPerLine,
    allowOther,
    otherOptionName,
    otherInputIdSuffix,
    otherInputLabel,
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    const OtherOptionIdAndValue = name + "Other"
    let optionsToRender: CheckBoxOption[] = []
    optionsToRender = optionsToRender.concat(options)

    if (allowOther === true) {
        optionsToRender.push({
            id: OtherOptionIdAndValue,
            label: otherOptionName ?? "Other",
            defaultValue: false,
        })
    }

    let checkboxButtonClasses: string[] = []
    let choiceStyles = formStyles.formItemMultipleChoiceChoices
    if (itemsPerLine != null && itemsPerLine === 2) {
        choiceStyles = formStyles.formItemMultipleChoiceChoicesTwoPerRow
    }
    if (itemsPerLine != null && itemsPerLine === 3) {
        choiceStyles = formStyles.formItemMultipleChoiceChoicesThreePerRow
        checkboxButtonClasses = [formStyles.smallCheckboxOption]
    }

    const inputDivs = optionsToRender.map(option => {
        return (
            <div key={option.id}>
                <input
                    type="checkbox"
                    name={option.id}
                    id={option.id}
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    ref={register(validation)}
                    className={classNames(checkboxButtonClasses)}
                />
                <label
                    htmlFor={option.id}
                    className={classNames(
                        formStyles.detailLabel,
                        formStyles.selectableButton
                    )}
                >
                    {option.label}
                </label>
            </div>
        )
    })

    const showOtherInput: boolean =
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        allowOther === true && watch(OtherOptionIdAndValue) === true

    const otherInputIdAndName = name + (otherInputIdSuffix ?? "OtherInput")

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
                <div className={choiceStyles}>{inputDivs}</div>
            </Field>
            {otherInput}
        </>
    )
}

export default CheckBoxField
