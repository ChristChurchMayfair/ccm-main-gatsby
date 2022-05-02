/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classnames from "classnames"
import React from "react"

import styles from "./switch.module.scss"

interface SwitchProps {
    onChange: (value: boolean) => void
    checked: boolean
    disabled: boolean
    checkedText: string
    uncheckedText: string
}
const Switch: React.FC<SwitchProps> = ({
    onChange,
    checked,
    disabled,
    checkedText,
    uncheckedText,
}) => (
    <div
        className={classnames(styles.switch, {
            [styles["switch--checked"]]: checked,
            [styles["switch--disabled"]]: disabled,
        })}
    >
        <div className={styles.toggle}>
            <div>{checked ? checkedText : uncheckedText}</div>
        </div>
        <input
            type="checkbox"
            className={styles.input}
            checked={checked}
            disabled={disabled}
            onChange={({ target: { checked } }) => onChange(checked)}
        />
    </div>
)

export default Switch
