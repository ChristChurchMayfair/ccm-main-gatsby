import React, { FC, HTMLProps } from "react"

import Section from "./section"

import styles from "./header-underlay.module.scss"
import classNames from "classnames"

interface HeaderUnderlayProps extends HTMLProps<HTMLDivElement> {}

const HeaderUnderlay: FC<HeaderUnderlayProps> = ({ children, className }) => (
    <Section className={classNames(className, styles.headerUnderlay)}>
        {children}
    </Section>
)

export default HeaderUnderlay
