import classnames from "classnames"
import React, { FC } from "react"

import "./headingInfoPanel.scss"

interface HeadingInfoPanelProps {
    dark?: boolean
}

/**
 * The heading for an information panel section
 */
const HeadingInfoPanel: FC<HeadingInfoPanelProps> = ({
    children,
    dark = false,
}) => (
    <h1
        className={classnames("heading-info-panel", {
            "heading-info-panel--dark": dark,
        })}
    >
        {children}
    </h1>
)

export default HeadingInfoPanel
