/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"

import styles from "./field.module.scss"
import classNames from "classnames"

interface Props {
    className?: string
    labelText?: string
    labelFor?: string
    contextualHelp?: string
    error: string | undefined
    children: React.ReactNode
}

const Field: React.FC<Props> = ({
    className,
    children,
    error,
    labelText,
    labelFor,
    contextualHelp,
}) => {
    return (
        <div className={classNames(className, styles.main)}>
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
