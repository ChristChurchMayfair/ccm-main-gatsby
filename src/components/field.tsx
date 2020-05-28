import React from "react"

import styles from "./field.module.scss"
import { ErrorMessage } from "react-hook-form"

interface Props {
    labelText?: string
    labelFor?: string
    contextualHelp?: string
    error: string | undefined
    children: React.ReactNode
}

const Field: React.FC<Props> = ({
    children,
    error,
    labelText,
    labelFor,
    contextualHelp,
}) => {
    return (
        <div className={styles.main}>
            <label className={styles.label} htmlFor={labelFor}>
                {labelText}
            </label>
            <div className={styles.input}>{children}</div>
            {contextualHelp != null && (
                <div className={styles.contextualHelp}>{contextualHelp}</div>
            )}
            {error != null && <div className={styles.error}>{error}</div>}
        </div>
    )
}

export default Field
