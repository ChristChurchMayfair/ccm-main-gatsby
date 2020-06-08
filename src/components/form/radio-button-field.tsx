import { Radio, CommonFormWiring } from "./form-config.types"
import Field from "./field"
import React from "react"
import classNames from "classnames"
import formStyles from "./form.module.scss"
import { generateConditional, prependRequired } from "./form"

type RadioButtonFieldProps = Radio & CommonFormWiring

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

    const shouldDisplayThisField = generateConditional(showWhen, watch)

    if (!shouldDisplayThisField) {
        return <></>
    }

    contextualHelp = prependRequired(validation, contextualHelp)

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
            contextualHelp={contextualHelp}
            error={errors[name]?.message}
        >
            <div className={formStyles.formItemMultipleChoiceChoices}>
                {inputDivs}
            </div>
        </Field>
    )
}

export default RadioButtonField