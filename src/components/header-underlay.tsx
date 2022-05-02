/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
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
