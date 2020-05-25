import classnames from "classnames"
import React, { FC, HTMLProps } from "react"

import styles from "./find-out-more-text.module.scss"

interface FindOutMoreTextProps extends HTMLProps<HTMLDivElement> {}

const FindOutMoreText: FC<FindOutMoreTextProps> = ({
    children,
    className,
    ...elementProps
}) => (
    <div
        className={classnames(styles.findOutMoreText, className)}
        {...elementProps}
    >
        {children}
    </div>
)

export default FindOutMoreText
