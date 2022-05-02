/* These will go away when we upgrade to Gatsby >v3 
see: https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v2-to-v3/#css-modules-are-imported-as-es-modules */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react"

import Img, { FluidObject } from "./img"
import styles from "./hero.module.scss"
import Section from "./section"

interface HeroProps {
    sectionId: string
    overlayCaption?: string
    singleImageFluid?: FluidObject
}

const Hero: React.FC<HeroProps> = ({
    sectionId,
    overlayCaption,
    singleImageFluid,
    children,
}) => (
    <div className={styles.heroContainer}>
        <Section id={sectionId} colorScheme="custom" className={styles.hero}>
            <div className={styles.childrenContainer}>
                <div className={styles.children}>{children}</div>
            </div>

            <div className={styles.carouselOverlay}>
                <h1 className={styles.overlayCaption}>{overlayCaption}</h1>
            </div>

            {singleImageFluid !== undefined && (
                <Img
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                    loading="eager"
                    fadeIn={false}
                    fluid={singleImageFluid}
                    objectFit="cover"
                    objectPosition="center top"
                />
            )}
        </Section>
    </div>
)

export default Hero
