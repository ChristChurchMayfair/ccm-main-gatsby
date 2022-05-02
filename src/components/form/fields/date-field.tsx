/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Field from "../field"
import React from "react"
import classNames from "classnames"
import formStyles from "../form.module.scss"
import { ReactHookFormWiring, CommonField } from "../form-config.types"
import { prependRequired } from "../form"
import { Controller } from "react-hook-form"
import DatePicker from "react-datepicker"
import { shouldShowField } from "../conditional-visibility"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import datepickerCssUrl from "!file-loader!react-datepicker/dist/react-datepicker.min.css"
import LazyLoadCss from "../../../components/lazy-load-css"

type DateFieldProps = CommonField &
    ReactHookFormWiring & {
        placeholder?: string
        maxDate?: Date
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
    maxDate,
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    return (
        <>
            <LazyLoadCss url={datepickerCssUrl} />
            <Field
                labelText={label}
                labelFor={name}
                error={errors[name]?.message}
                contextualHelp={prependRequired(validation, contextualHelp)}
            >
                <Controller
                    as={DatePicker}
                    control={control}
                    wrapperClassName={classNames(formStyles.formItemInput)}
                    className={formStyles.dateInput}
                    dateFormat="yyyy-MM-dd"
                    maxDate={maxDate} // Can't select beyond today
                    valueName="selected" // DateSelect value's name is selected
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                    onChange={([selected]) => selected}
                    name={name}
                    id={name}
                    placeholderText={placeholder ?? "Select Date"}
                    rules={validation}
                />
            </Field>
        </>
    )
}

export default DateField
