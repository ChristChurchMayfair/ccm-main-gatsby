import Field from "./field"
import React from "react"
import classNames from "classnames"
import formStyles from "./form.module.scss"
import { BasicText, CommonFormWiring } from "./form-config.types"
import { prependRequired, generateConditional } from "./form"

type BasicTextFieldProps = BasicText & CommonFormWiring

const BasicTextField: React.FC<BasicTextFieldProps> = ({
    label,
    name,
    contextualHelp,
    placeholder,
    register,
    validation,
    errors,
    autoComplete,
    showWhen,
    watch
}) => {

    const shouldDisplayThisField = generateConditional(showWhen, watch)

    if (!shouldDisplayThisField) {
        return <></>
    }

    contextualHelp = prependRequired(validation, contextualHelp)

    return (
        <Field
            key={name}
            labelText={label}
            contextualHelp={contextualHelp}
            error={errors[name]?.message}
        >
            <input
                type="text"
                name={name}
                id={name}
                className={classNames(formStyles.formItemInput)}
                placeholder={placeholder ?? label}
                ref={register(validation)}
                autoComplete={autoComplete ?? "off"}
            />
        </Field>
    )
}

export default BasicTextField
