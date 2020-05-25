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
            dark={dark}
        >
            <div className={styles.topImage}>{topImage}</div>
            <div className={styles.bottomImage}>{bottomImage}</div>
            <div className={styles.content}>{children}</div>
        </Section>
    </div>
)

export default DoubleImageSection
