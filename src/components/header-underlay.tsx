import React, { FC } from "react"

import Section from "./section"

import styles from "./header-underlay.module.scss"

interface HeaderUnderlayProps {}

const HeaderUnderlay: FC<HeaderUnderlayProps> = ({ children }) => (
    <Section className={styles.headerUnderlay}>{children}</Section>
)

export default HeaderUnderlay
