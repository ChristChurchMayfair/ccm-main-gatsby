import classnames from "classnames"
import React, { FC, HTMLProps } from "react"

import Section from "./section"

import styles from "./header-underlay.module.scss"

interface HeaderUnderlayProps extends HTMLProps<HTMLDivElement> {}

const HeaderUnderlay: FC<HeaderUnderlayProps> = ({
    children,
    className,
    ...elementProps
}) => (
    <Section
        className={classnames(styles.headerUnderlay, className)}
        {...elementProps}
    >
        {children}
    </Section>
)

export default HeaderUnderlay
