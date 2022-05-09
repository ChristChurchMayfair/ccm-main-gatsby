import classnames from "classnames"
import React, { FC, HTMLProps, ReactNode } from "react"

import styles from "./section.module.scss"

export type SectionImagePosition = "left" | "right"
type SectionImageBackgroundPosition =
    | "left"
    | "right"
    | "centre"
    | "top-centre"
    | "bottom-centre"

export type colorScheme = "dark" | "light" | "custom"

interface SectionProps extends HTMLProps<HTMLDivElement> {
    intro?: boolean
    wider?: boolean
    colorScheme: colorScheme
    mobileImageTextSwap?: boolean
    infoPanel?: boolean
    infoPanelImage?: ReactNode
    noImageOnMobile?: boolean
    fullBleed?: boolean
    imagePosition?: SectionImagePosition
    imageBackgroundPosition?: SectionImageBackgroundPosition
}

const Section: FC<SectionProps> = ({
    intro = false,
    wider = false,
    colorScheme,
    mobileImageTextSwap = false,
    infoPanel = false,
    infoPanelImage,
    noImageOnMobile = false,
    imagePosition,
    imageBackgroundPosition,
    fullBleed = false,
    children,
    className,
    ...elementProps
}) => (
    <section
        className={classnames(className, styles.section, {
            [styles["section--intro"]]: intro,
            [styles["section--wider-intro"]]: intro && wider,
            [styles["section--dark"]]: colorScheme === "dark",
            [styles["section--light"]]: colorScheme === "light",
            [styles["section--info-panel"]]: infoPanel,
            [styles["section--image-left"]]: imagePosition === "left",
            [styles["section--image-right"]]: imagePosition === "right",
            [styles["section--mobile-image-text-swap"]]: mobileImageTextSwap,
            [styles["section--no-image-on-mobile"]]: noImageOnMobile,
            [styles["section--full-bleed"]]: fullBleed,
        })}
        {...elementProps}
    >
        {infoPanel && infoPanelImage && (
            <div
                className={classnames(styles.infoPanelImageContainer, {
                    [styles["infoPanelImageContainer--full-bleed"]]: fullBleed,
                    [styles["infoPanelImageContainer--left"]]:
                        imageBackgroundPosition === "left",
                    [styles["infoPanelImageContainer--right"]]:
                        imageBackgroundPosition === "right",
                    [styles["infoPanelImageContainer--centre"]]:
                        imageBackgroundPosition === "centre",
                    [styles["infoPanelImageContainer--top-centre"]]:
                        imageBackgroundPosition === "top-centre",
                    [styles["infoPanelImageContainer--bottom-centre"]]:
                        imageBackgroundPosition === "bottom-centre",
                })}
            >
                {infoPanelImage}
            </div>
        )}
        {children}
    </section>
)

export default Section
