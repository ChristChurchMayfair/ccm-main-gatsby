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
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    const inputDivs = options.map(option => {
        return (
            <div key={option.id}>
                <input
                    type="checkbox"
                    name={option.id}
                    id={option.id}
                    ref={register(validation)}
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

    let choiceStyles = formStyles.formItemMultipleChoiceChoices
    if (itemsPerLine != null && itemsPerLine === 2) {
        choiceStyles = formStyles.formItemMultipleChoiceChoicesTwoPerRow
    }

    return (
        <Field
            key={name}
            labelText={label}
            contextualHelp={prependRequired(validation, contextualHelp)}
            error={errors[name]?.message}
        >
            <div className={choiceStyles}>
                {inputDivs}
            </div>
        </Field>
    )
}

export default CheckBoxField
