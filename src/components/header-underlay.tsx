import React, { FC, HTMLProps } from "react"

import Section, { colorScheme } from "./section"

import styles from "./header-underlay.module.scss"
import classNames from "classnames"

interface HeaderUnderlayProps extends HTMLProps<HTMLDivElement> {
    colorScheme: colorScheme
}

const HeaderUnderlay: FC<HeaderUnderlayProps> = ({
    children,
    className,
    colorScheme,
}) => (
    <Section
        className={classNames(className, styles.headerUnderlay)}
        colorScheme={colorScheme}
    >
        {children}
    </Section>
)

export default HeaderUnderlay
