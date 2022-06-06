import classnames from "classnames"
import React, { FC, HTMLProps } from "react"

import * as styles from "./section-text.module.scss"

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
