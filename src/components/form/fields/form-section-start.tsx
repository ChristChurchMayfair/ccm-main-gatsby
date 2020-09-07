import React from "react"
import formStyles from "../form.module.scss"

export const FormInformationSection: React.FC = ({ children }) => {
    return <div className={formStyles.sectionInfo}>{children}</div>
}
