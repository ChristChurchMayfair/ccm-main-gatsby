import classnames from "classnames"
import React from "react"

import "./storybookContainer.scss"

interface StorybookContainerProps {
    dark?: boolean
    showSpacing?: boolean
}

const StorybookContainer: React.FC<StorybookContainerProps> = ({
    children,
    dark = false,
    showSpacing = false,
}) => (
    <>
        <div
            className={classnames("storybook-container", {
                "storybook-container--dark": dark,
                "storybook-container--show-spacing": showSpacing,
            })}
        >
            {children}
        </div>
        {showSpacing && (
            <div className="storybook-container-spacing-viewer-label">
                Spacing viewer
            </div>
        )}
    </>
)

export default StorybookContainer
