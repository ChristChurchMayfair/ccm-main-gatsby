import React from "react"
import { shouldShowField, VisibilityCondition } from "../conditional-visibility"
import { ReactHookFormWiring } from "../form-config.types"
import formStyles from "../form.module.scss"

type Props = {
    showWhen?: VisibilityCondition
} & ReactHookFormWiring

export const FormInformationSection: React.FC<Props> = ({
    showWhen,
    watch,
    children,
}) => {
    const shouldDisplayThisField = shouldShowField(showWhen, watch)

    if (shouldDisplayThisField === false) {
        return null
    }

    return <div className={formStyles.sectionInfo}>{children}</div>
}
