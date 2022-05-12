import Field from "../field"
import React from "react"
import classNames from "classnames"
import * as formStyles from "../form.module.scss"
import { ReactHookFormWiring, CommonField } from "../form-config.types"
import { prependRequired } from "../form"
import { shouldShowField } from "../conditional-visibility"

type BasicTextFieldProps = CommonField &
    ReactHookFormWiring & {
        placeholder?: string
        autoComplete?: string
    }

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
    watch,
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    return (
        <Field
            key={name}
            labelText={label}
            contextualHelp={prependRequired(validation, contextualHelp)}
            error={errors[name]?.message}
        >
            <input
                type={"text"}
                name={name}
                id={name}
                className={classNames(formStyles.formItemInput)}
                placeholder={placeholder ?? label}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                ref={register(validation)}
                autoComplete={autoComplete ?? "off"}
            />
        </Field>
    )
}

export default BasicTextField
