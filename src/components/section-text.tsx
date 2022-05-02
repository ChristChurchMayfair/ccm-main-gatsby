/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classnames from "classnames"
import React, { FC, HTMLProps } from "react"

import styles from "./section-text.module.scss"

interface SectionTextProps extends HTMLProps<HTMLDivElement> {
    intro?: boolean
    infoPanel?: boolean
    dark?: boolean
    fullBleed?: boolean
}

const SectionText: FC<SectionTextProps> = ({
    intro = false,
    infoPanel = false,
    dark = false,
    fullBleed = false,
    children,
    className,
    ...elementProps
}) => (
    <div
        className={classnames(className, styles.sectionText, {
            [styles["sectionText--intro"]]: intro,
            [styles["sectionText--dark-info-panel"]]: dark && infoPanel,
            [styles["sectionText--full-bleed"]]: fullBleed,
            [styles["sectionText--info-panel"]]: infoPanel,
        })}
        {...elementProps}
    >
        {children}
    </div>
)

export default SectionText
