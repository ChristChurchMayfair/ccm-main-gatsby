import React from "react"

import Img, { FluidObject } from "./img"

interface Props {
    sectionId: string
    sectionClass: string
    overlayCaption?: string
    fluid: FluidObject | undefined
}

const Hero: React.FC<Props> = ({
    sectionId,
    sectionClass,
    overlayCaption,
    fluid,
}) => {
    return (
        <section
            id={sectionId}
            className={`hero ${sectionClass}`}
            style={{ position: "relative" }}
        >
            <div className="carousel-overlay">
                <h1>{overlayCaption}</h1>
            </div>
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
                fluid={fluid}
                objectFit="cover"
                objectPosition="center top"
            />
        </section>
    )
}

export default Hero
