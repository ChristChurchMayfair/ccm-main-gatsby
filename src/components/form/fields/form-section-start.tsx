/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
