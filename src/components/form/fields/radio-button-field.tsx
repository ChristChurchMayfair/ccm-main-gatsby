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
}

type Radio = {
    options: RadioOption[]
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
    validation
}) => {

    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    const inputDivs = options.map(option => {
        return (
            <div key={option.id}>
                <input
                    type="radio"
                    id={option.id}
                    value={option.name}
                    name={name}
                    ref={register({
                        required: true,
                    })}
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

    return (
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
    )
}

export default RadioButtonField