import Field from "./field"
import React from "react"
import classNames from "classnames"
import { FormState } from "./form"
import formStyles from "./form.module.scss"

type SubmitButtonProps = {
    formState: FormState,
    submissionError: string
}

const SubmitButtonField: React.FC<SubmitButtonProps> = ({formState, submissionError}) => {
    return (
        <Field error={undefined}>
            <input
                type="submit"
                value={formState === "submitting" ? "Submitting..." : "Submit"}
                name="submit"
                id="submit"
                className={classNames(formStyles.submitButton, "button")}
                disabled={formState === "submitting"}
            />
            {formState === "error" && (
                <div className={formStyles.formSubmissionError}>
                    {submissionError}
                </div>
            )}
        </Field>
    )
}

export default SubmitButtonField
