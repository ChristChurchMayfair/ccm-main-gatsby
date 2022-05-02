/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classnames from "classnames"
import React, { FC, ReactNode } from "react"

import styles from "./double-image-section.module.scss"
import Section from "./section"

type ImagesPosition = "left" | "right"

interface DoubleImageSectionProps {
    dark?: boolean
    imagesPosition: ImagesPosition
    topImage: ReactNode
    bottomImage: ReactNode
}

const DoubleImageSection: FC<DoubleImageSectionProps> = ({
    dark = false,
    imagesPosition,
    topImage,
    bottomImage,
    children,
}) => (
    <div className={styles.doubleImageSectionContainer}>
        <Section
            className={classnames(styles.doubleImageSection, {
                [styles["doubleImageSection--left"]]: imagesPosition === "left",
                [styles["doubleImageSection--right"]]:
                    imagesPosition === "right",
            })}
            colorScheme={dark ? "dark" : "light"}
        >
            <div className={styles.topImage}>{topImage}</div>
            <div className={styles.bottomImage}>{bottomImage}</div>
            <div className={styles.content}>{children}</div>
        </Section>
    </div>
)

export default DoubleImageSection
