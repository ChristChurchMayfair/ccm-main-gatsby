import Field from "../field"
import React from "react"
import classNames from "classnames"
import formStyles from "../form.module.scss"
import { ReactHookFormWiring, CommonField } from "../form-config.types"
import { prependRequired } from "../form"
import { Controller } from "react-hook-form"
import DatePicker from "react-datepicker"
import { shouldShowField } from "../conditional-visibility"

type DateFieldProps = CommonField & ReactHookFormWiring & {
    placeholder?: string
}

const DateField: React.FC<DateFieldProps> = ({
    name,
    label,
    placeholder,
    contextualHelp,
    showWhen,
    validation,
    errors,
    watch,
    control,
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return <></>
    }

    contextualHelp = prependRequired(validation, contextualHelp)

    return (
        <Field
            labelText={label}
            labelFor={name}
            error={errors[name]?.message}
            contextualHelp={contextualHelp}
        >
            <Controller
                as={DatePicker}
                control={control}
                wrapperClassName={classNames(formStyles.formItemInput)}
                className={formStyles.dateInput}
                dateFormat="yyyy-MM-dd"
                maxDate={new Date()} //Can't select beyond today
                valueName="selected" // DateSelect value's name is selected
                onChange={([selected]) => selected}
                name={name}
                id={name}
                placeholderText={placeholder ?? "Select Date"}
                rules={validation}
            />
        </Field>
    )
}

export default DateField