import { Checkboxes, CommonFormWiring } from "./form-config.types"
import Field from "./field"
import React from "react"
import classNames from "classnames"
import formStyles from "./form.module.scss"
import { prependRequired, generateConditional } from "./form"

type CheckBoxFieldProps = Checkboxes & CommonFormWiring

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
    name,
    label,
    options,
    validation,
    contextualHelp,
    errors,
    register,
    watch,
    showWhen
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

export default CheckBoxField
