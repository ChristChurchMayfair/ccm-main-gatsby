import Field from "../field"
import React from "react"
import classNames from "classnames"
import * as formStyles from "../form.module.scss"
import { ReactHookFormWiring, CommonField } from "../form-config.types"
import { prependRequired } from "../form"
import { shouldShowField } from "../conditional-visibility"

type NumberFieldProps = CommonField &
    ReactHookFormWiring & {
        placeholder?: string
        autoComplete?: string
        max?: number
        min?: number
        step?: number
    }

const NumberField: React.FC<NumberFieldProps> = ({
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
    max,
    min,
    step,
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
                type={"number"}
                name={name}
                id={name}
                className={classNames(formStyles.formItemInput)}
                placeholder={placeholder ?? label}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                ref={register(validation)}
                autoComplete={autoComplete ?? "off"}
                max={max}
                min={min}
                step={step}
            />
        </Field>
    )
}

export default NumberField
